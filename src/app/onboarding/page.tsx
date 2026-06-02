import { getTranslations } from 'next-intl/server';
import { createClient } from '@/lib/supabase/server';
import { OnboardingWizard } from '@/components/onboarding/wizard';
import { mapRowToProfileValues } from '@/lib/profile-mapper';

export default async function OnboardingPage() {
  const t = await getTranslations('onboarding');
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: row } = await supabase.from('profiles').select('*').eq('id', user!.id).single();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-semibold tracking-tight">{t('title')}</h1>
      </div>
      <OnboardingWizard defaultValues={mapRowToProfileValues(row)} />
    </div>
  );
}
