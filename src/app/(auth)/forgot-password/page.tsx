'use client';

import * as React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { forgotPassword } from '@/lib/actions/auth';
import { forgotPasswordSchema, type ForgotPasswordValues } from '@/lib/validations/auth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FieldError } from '@/components/ui/field-error';

export default function ForgotPasswordPage() {
  const t = useTranslations('auth');
  const tc = useTranslations('common');
  const [sent, setSent] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordValues>({ resolver: zodResolver(forgotPasswordSchema) });

  async function onSubmit(values: ForgotPasswordValues) {
    const result = await forgotPassword(values);
    if (result?.success) setSent(true);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('forgot.title')}</CardTitle>
        <CardDescription>{t('forgot.subtitle')}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {sent ? (
          <p className="rounded-lg bg-muted p-4 text-sm text-foreground">{t('forgot.sent')}</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
            <div>
              <Label htmlFor="email">{t('fields.email')}</Label>
              <Input id="email" type="email" autoComplete="email" {...register('email')} />
              <FieldError message={errors.email && 'email'} />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? tc('loading') : t('forgot.submit')}
            </Button>
          </form>
        )}
        <p className="text-center text-sm">
          <Link href="/login" className="font-medium text-primary hover:underline">
            {t('forgot.backToLogin')}
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
