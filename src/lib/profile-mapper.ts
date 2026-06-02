import type { ProfileValues } from '@/lib/validations/profile';

// Shape of a `profiles` row as returned by Supabase (nullable columns).
export interface ProfileRow {
  full_name: string | null;
  date_of_birth: string | null;
  gender: ProfileValues['gender'] | null;
  height_cm: number | null;
  weight_kg: number | null;
  medical_conditions: string[] | null;
  dietary_restrictions: string[] | null;
  allergies: string[] | null;
  current_medications: string[] | null;
  goals: ProfileValues['goals'] | null;
  occupation: string | null;
  daily_routine: string | null;
  activity_level: ProfileValues['activity_level'] | null;
  unit_system: ProfileValues['unit_system'] | null;
  notifications_enabled: boolean | null;
}

// Maps a (possibly empty) DB row to form default values, dropping nulls so
// react-hook-form falls back to the wizard/form's own defaults.
export function mapRowToProfileValues(row: ProfileRow | null): Partial<ProfileValues> {
  if (!row) return {};
  return {
    ...(row.full_name ? { full_name: row.full_name } : {}),
    ...(row.date_of_birth ? { date_of_birth: row.date_of_birth } : {}),
    ...(row.gender ? { gender: row.gender } : {}),
    ...(row.height_cm != null ? { height_cm: row.height_cm } : {}),
    ...(row.weight_kg != null ? { weight_kg: row.weight_kg } : {}),
    medical_conditions: row.medical_conditions ?? [],
    dietary_restrictions: row.dietary_restrictions ?? [],
    allergies: row.allergies ?? [],
    current_medications: row.current_medications ?? [],
    goals: row.goals ?? [],
    occupation: row.occupation ?? '',
    daily_routine: row.daily_routine ?? '',
    ...(row.activity_level ? { activity_level: row.activity_level } : {}),
    unit_system: row.unit_system ?? 'metric',
    notifications_enabled: row.notifications_enabled ?? true,
  };
}
