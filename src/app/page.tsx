import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

// Entry point: route users to the right place. Middleware also enforces this,
// but this keeps the root path from rendering an empty shell.
export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect('/login');

  const { data: profile } = await supabase
    .from('profiles')
    .select('onboarding_completed')
    .eq('id', user.id)
    .single();

  redirect(profile?.onboarding_completed ? '/dashboard' : '/onboarding');
}
