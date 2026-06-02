import { createClient } from '@supabase/supabase-js';

// Privileged server-only client using the service-role key. Bypasses RLS.
// NEVER import this into client components. Used for LGPD account deletion.
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: { autoRefreshToken: false, persistSession: false },
    }
  );
}
