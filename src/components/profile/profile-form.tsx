'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';
import { saveProfile } from '@/lib/actions/profile';
import { profileSchema, type ProfileValues } from '@/lib/validations/profile';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  BasicFields,
  HealthFields,
  GoalsFields,
  LifestyleFields,
  PreferencesFields,
} from '@/components/onboarding/fields';

export function ProfileForm({ defaultValues }: { defaultValues: Partial<ProfileValues> }) {
  const t = useTranslations('profile');
  const ts = useTranslations('profile.sections');
  const tc = useTranslations('common');
  const [saved, setSaved] = React.useState(false);
  const [error, setError] = React.useState(false);

  const form = useForm<ProfileValues>({
    resolver: zodResolver(profileSchema),
    defaultValues,
  });

  async function onSubmit(values: ProfileValues) {
    setSaved(false);
    setError(false);
    const result = await saveProfile(values);
    if (result.error) setError(true);
    else setSaved(true);
  }

  const sections = [
    { title: ts('basic'), node: <BasicFields form={form} /> },
    { title: ts('health'), node: <HealthFields form={form} /> },
    { title: ts('goals'), node: <GoalsFields form={form} /> },
    { title: ts('lifestyle'), node: <LifestyleFields form={form} /> },
    { title: ts('preferences'), node: <PreferencesFields form={form} /> },
  ];

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {sections.map((s) => (
        <Card key={s.title}>
          <CardHeader>
            <CardTitle className="text-base">{s.title}</CardTitle>
          </CardHeader>
          <CardContent>{s.node}</CardContent>
        </Card>
      ))}

      <div className="flex items-center gap-3">
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? tc('saving') : tc('save')}
        </Button>
        {saved && (
          <span className="inline-flex items-center gap-1 text-sm text-success">
            <Check className="h-4 w-4" />
            {t('saved')}
          </span>
        )}
        {error && <span className="text-sm text-danger">{tc('genericError')}</span>}
      </div>
    </form>
  );
}
