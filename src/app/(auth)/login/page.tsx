'use client';

import * as React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { login } from '@/lib/actions/auth';
import { loginSchema, type LoginValues } from '@/lib/validations/auth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FieldError } from '@/components/ui/field-error';
import { GoogleButton } from '@/components/auth/google-button';

export default function LoginPage() {
  const t = useTranslations('auth');
  const tc = useTranslations('common');
  const [serverError, setServerError] = React.useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({ resolver: zodResolver(loginSchema) });

  async function onSubmit(values: LoginValues) {
    setServerError(undefined);
    const result = await login(values);
    if (result?.error) setServerError(t(`errors.${result.error}`));
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('login.title')}</CardTitle>
        <CardDescription>{t('login.subtitle')}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <GoogleButton />
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="h-px flex-1 bg-border" />
          ou
          <span className="h-px flex-1 bg-border" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <div>
            <Label htmlFor="email">{t('fields.email')}</Label>
            <Input id="email" type="email" autoComplete="email" {...register('email')} />
            <FieldError message={errors.email && 'email'} />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password">{t('fields.password')}</Label>
              <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                {t('login.forgot')}
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              {...register('password')}
            />
            <FieldError message={errors.password && 'required'} />
          </div>
          {serverError && <p className="text-sm text-danger">{serverError}</p>}
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? tc('loading') : t('login.submit')}
          </Button>
        </form>
        <p className="text-center text-sm text-muted-foreground">
          {t('login.noAccount')}{' '}
          <Link href="/signup" className="font-medium text-primary hover:underline">
            {t('login.signupLink')}
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
