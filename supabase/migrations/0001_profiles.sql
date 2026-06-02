-- Rito Health — Phase 1 foundation schema.
-- Profiles table (1:1 with auth.users), RLS policies, and auto-provisioning trigger.

-- 1:1 profile per authenticated user.
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,

  -- Basic information
  full_name text,
  date_of_birth date,
  gender text check (gender in ('female', 'male', 'other', 'prefer_not_to_say')),
  height_cm numeric(5, 1),
  weight_kg numeric(5, 1),

  -- Health information
  medical_conditions text[] not null default '{}',
  dietary_restrictions text[] not null default '{}',
  allergies text[] not null default '{}',
  current_medications text[] not null default '{}',

  -- Goals
  goals text[] not null default '{}',

  -- Lifestyle
  occupation text,
  daily_routine text,
  activity_level text check (
    activity_level in ('sedentary', 'light', 'moderate', 'active', 'athlete')
  ),

  -- Preferences
  unit_system text not null default 'metric' check (unit_system in ('metric', 'imperial')),
  locale text not null default 'pt-BR',
  notifications_enabled boolean not null default true,

  -- Meta
  onboarding_completed boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Row Level Security: a user can only see and change their own row.
alter table public.profiles enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
  on public.profiles for select
  using (auth.uid() = id);

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
  on public.profiles for insert
  with check (auth.uid() = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Auto-create an empty profile row whenever a new auth user is created.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id)
  values (new.id)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
