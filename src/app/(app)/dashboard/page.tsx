import { Sparkles } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { createClient } from '@/lib/supabase/server';
import { Card, CardContent } from '@/components/ui/card';

export default async function DashboardPage() {
  const t = await getTranslations('dashboard');
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name')
    .eq('id', user!.id)
    .single();

  const firstName = profile?.full_name?.split(' ')[0] ?? '';

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">{t('welcome', { name: firstName })}</h1>
      <Card>
        <CardContent className="flex flex-col items-center gap-3 py-12 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Sparkles className="h-6 w-6" />
          </span>
          <h2 className="text-lg font-medium">{t('comingSoonTitle')}</h2>
          <p className="max-w-md text-sm text-muted-foreground">{t('comingSoon')}</p>
        </CardContent>
      </Card>
    </div>
  );
}
