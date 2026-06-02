'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { profileSchema } from '@/lib/validations/profile';

export type ProfileActionResult = { error?: string; success?: boolean };

export async function saveProfile(
  values: unknown,
  options?: { completeOnboarding?: boolean }
): Promise<ProfileActionResult> {
  const parsed = profileSchema.safeParse(values);
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? 'generic' };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: 'generic' };

  const payload = {
    ...parsed.data,
    occupation: parsed.data.occupation || null,
    daily_routine: parsed.data.daily_routine || null,
    ...(options?.completeOnboarding ? { onboarding_completed: true } : {}),
    updated_at: new Date().toISOString(),
  };

  const { error } = await supabase.from('profiles').update(payload).eq('id', user.id);
  if (error) return { error: 'generic' };

  revalidatePath('/settings/profile');
  revalidatePath('/dashboard');
  return { success: true };
}

// LGPD: permanently delete the authenticated user's account and (via cascade)
// all of their data. Uses the service-role key, which never reaches the client.
export async function deleteAccount(): Promise<ProfileActionResult> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: 'generic' };

  const admin = createAdminClient();
  const { error } = await admin.auth.admin.deleteUser(user.id);
  if (error) return { error: 'generic' };

  await supabase.auth.signOut();
  redirect('/login');
}
