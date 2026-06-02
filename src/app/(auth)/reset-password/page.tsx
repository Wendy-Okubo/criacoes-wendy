'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { resetPassword } from '@/lib/actions/auth';
import { resetPasswordSchema, type ResetPasswordValues } from '@/lib/validations/auth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FieldError } from '@/components/ui/field-error';

export default function ResetPasswordPage() {
  const t = useTranslations('auth');
  const tc = useTranslations('common');
  const router = useRouter();
  const [done, setDone] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordValues>({ resolver: zodResolver(resetPasswordSchema) });

  async function onSubmit(values: ResetPasswordValues) {
    const result = await resetPassword(values);
    if (result?.success) {
      setDone(true);
      setTimeout(() => router.push('/'), 1500);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('reset.title')}</CardTitle>
        <CardDescription>{t('reset.subtitle')}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {done ? (
          <p className="rounded-lg bg-muted p-4 text-sm text-foreground">{t('reset.success')}</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
            <div>
              <Label htmlFor="password">{t('fields.password')}</Label>
              <Input
                id="password"
                type="password"
                autoComplete="new-password"
                {...register('password')}
              />
              <FieldError message={errors.password && 'minPassword'} />
            </div>
            <div>
              <Label htmlFor="confirmPassword">{t('fields.confirmPassword')}</Label>
              <Input
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                {...register('confirmPassword')}
              />
              <FieldError
                message={
                  errors.confirmPassword &&
                  (errors.confirmPassword.message === 'passwordsDontMatch'
                    ? t('errors.passwordsDontMatch')
                    : 'minPassword')
                }
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? tc('loading') : t('reset.submit')}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
