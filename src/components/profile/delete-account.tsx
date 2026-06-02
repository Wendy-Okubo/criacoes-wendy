'use client';

import * as React from 'react';
import { useTranslations } from 'next-intl';
import { deleteAccount } from '@/lib/actions/profile';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function DeleteAccount() {
  const t = useTranslations('profile.account');
  const tc = useTranslations('common');
  const [confirming, setConfirming] = React.useState(false);
  const [pending, setPending] = React.useState(false);

  async function handleDelete() {
    setPending(true);
    await deleteAccount();
    // On success the action redirects; only resets here if it returned an error.
    setPending(false);
  }

  return (
    <Card className="border-danger/40">
      <CardHeader>
        <CardTitle className="text-base text-danger">{t('deleteTitle')}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{t('deleteDescription')}</p>
        {confirming ? (
          <div className="space-y-3">
            <p className="text-sm font-medium">{t('deleteConfirm')}</p>
            <div className="flex gap-3">
              <Button type="button" variant="danger" onClick={handleDelete} disabled={pending}>
                {pending ? t('deleting') : t('deleteButton')}
              </Button>
              <Button type="button" variant="outline" onClick={() => setConfirming(false)}>
                {tc('cancel')}
              </Button>
            </div>
          </div>
        ) : (
          <Button type="button" variant="danger" onClick={() => setConfirming(true)}>
            {t('deleteButton')}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
