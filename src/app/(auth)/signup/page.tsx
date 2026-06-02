'use client';

import * as React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { signup } from '@/lib/actions/auth';
import { signupSchema, type SignupValues } from '@/lib/validations/auth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FieldError } from '@/components/ui/field-error';
import { GoogleButton } from '@/components/auth/google-button';

export default function SignupPage() {
  const t = useTranslations('auth');
  const tc = useTranslations('common');
  const [serverError, setServerError] = React.useState<string>();
  const [done, setDone] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupValues>({ resolver: zodResolver(signupSchema) });

  async function onSubmit(values: SignupValues) {
    setServerError(undefined);
    const result = await signup(values);
    if (result?.error) setServerError(t(`errors.${result.error}`));
    else if (result?.success) setDone(true);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('signup.title')}</CardTitle>
        <CardDescription>{t('signup.subtitle')}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {done ? (
          <p className="rounded-lg bg-muted p-4 text-sm text-foreground">{t('signup.checkEmail')}</p>
        ) : (
          <>
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
                <Label htmlFor="password">{t('fields.password')}</Label>
                <Input
                  id="password"
                  type="password"
                  autoComplete="new-password"
                  {...register('password')}
                />
                <FieldError message={errors.password && 'minPassword'} />
              </div>
              {serverError && <p className="text-sm text-danger">{serverError}</p>}
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? tc('loading') : t('signup.submit')}
              </Button>
            </form>
          </>
        )}
        <p className="text-center text-sm text-muted-foreground">
          {t('signup.hasAccount')}{' '}
          <Link href="/login" className="font-medium text-primary hover:underline">
            {t('signup.loginLink')}
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
