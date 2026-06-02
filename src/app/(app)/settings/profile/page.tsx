import { getTranslations } from 'next-intl/server';
import { createClient } from '@/lib/supabase/server';
import { ProfileForm } from '@/components/profile/profile-form';
import { DeleteAccount } from '@/components/profile/delete-account';
import { mapRowToProfileValues } from '@/lib/profile-mapper';

export default async function ProfileSettingsPage() {
  const t = await getTranslations('profile');
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: row } = await supabase.from('profiles').select('*').eq('id', user!.id).single();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{t('title')}</h1>
        <p className="text-sm text-muted-foreground">{t('subtitle')}</p>
      </div>
      <ProfileForm defaultValues={mapRowToProfileValues(row)} />
      <DeleteAccount />
    </div>
  );
}
