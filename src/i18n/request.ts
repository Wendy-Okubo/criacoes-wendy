import { getRequestConfig } from 'next-intl/server';

// Single-locale setup (pt-BR) for now. Structured so additional locales
// (e.g. en-US) can be added later by switching `locale` dynamically and
// loading the matching messages file.
export const defaultLocale = 'pt-BR' as const;

export default getRequestConfig(async () => {
  const locale = defaultLocale;
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
