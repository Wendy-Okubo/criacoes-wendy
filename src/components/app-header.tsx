'use client';

import Link from 'next/link';
import { Activity, Settings, LogOut } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { logout } from '@/lib/actions/auth';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';

export function AppHeader({ showNav = true }: { showNav?: boolean }) {
  const t = useTranslations('app');
  const td = useTranslations('dashboard');
  const ta = useTranslations('auth');

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Activity className="h-5 w-5" />
          </span>
          {t('name')}
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {showNav && (
            <>
              <Link
                href="/settings/profile"
                aria-label={td('settings')}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted/60"
              >
                <Settings className="h-4 w-4" />
              </Link>
              <form action={logout}>
                <Button type="submit" variant="ghost" size="icon" aria-label={ta('logout')}>
                  <LogOut className="h-4 w-4" />
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
