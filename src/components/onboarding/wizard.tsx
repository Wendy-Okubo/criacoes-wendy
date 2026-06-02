'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { saveProfile } from '@/lib/actions/profile';
import { profileSchema, type ProfileValues } from '@/lib/validations/profile';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  BasicFields,
  HealthFields,
  GoalsFields,
  LifestyleFields,
  PreferencesFields,
} from './fields';

const STEPS = [
  { key: 'basic', fields: ['full_name', 'date_of_birth', 'gender', 'height_cm', 'weight_kg'] },
  { key: 'health', fields: [] },
  { key: 'goals', fields: ['goals'] },
  { key: 'lifestyle', fields: ['activity_level'] },
  { key: 'preferences', fields: ['unit_system', 'notifications_enabled'] },
] as const;

export function OnboardingWizard({ defaultValues }: { defaultValues: Partial<ProfileValues> }) {
  const router = useRouter();
  const t = useTranslations('onboarding');
  const ts = useTranslations('onboarding.steps');
  const tc = useTranslations('common');
  const [step, setStep] = React.useState(0);
  const [serverError, setServerError] = React.useState(false);

  const form = useForm<ProfileValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      medical_conditions: [],
      dietary_restrictions: [],
      allergies: [],
      current_medications: [],
      goals: [],
      unit_system: 'metric',
      notifications_enabled: true,
      ...defaultValues,
    },
  });

  const isLast = step === STEPS.length - 1;
  const current = STEPS[step];

  async function next() {
    const valid = await form.trigger([...current.fields] as (keyof ProfileValues)[]);
    if (valid) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  async function onSubmit(values: ProfileValues) {
    setServerError(false);
    const result = await saveProfile(values, { completeOnboarding: true });
    if (result.error) setServerError(true);
    else router.push('/dashboard');
  }

  return (
    <Card>
      <CardHeader className="gap-3">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{ts(current.key)}</span>
          <span>{t('stepOf', { current: step + 1, total: STEPS.length })}</span>
        </div>
        <Progress value={((step + 1) / STEPS.length) * 100} />
        <CardTitle className="pt-2 text-lg">{t(`${current.key}.title`)}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
          {step === 0 && <BasicFields form={form} />}
          {step === 1 && <HealthFields form={form} />}
          {step === 2 && <GoalsFields form={form} />}
          {step === 3 && <LifestyleFields form={form} />}
          {step === 4 && <PreferencesFields form={form} />}

          {serverError && <p className="mt-4 text-sm text-danger">{tc('genericError')}</p>}

          <div className="mt-6 flex items-center justify-between gap-3">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
            >
              <ArrowLeft className="h-4 w-4" />
              {tc('back')}
            </Button>

            {isLast ? (
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? tc('saving') : t('finish')}
                <Check className="h-4 w-4" />
              </Button>
            ) : (
              <Button type="button" onClick={next}>
                {tc('next')}
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
