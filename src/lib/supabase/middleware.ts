import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

type CookieToSet = { name: string; value: string; options: CookieOptions };

const PUBLIC_ROUTES = ['/login', '/signup', '/forgot-password', '/reset-password', '/auth'];

function isPublic(pathname: string) {
  return PUBLIC_ROUTES.some((p) => pathname === p || pathname.startsWith(p + '/'));
}

// Refreshes the Supabase session and enforces auth + onboarding routing.
export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet: CookieToSet[]) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;

  // Not logged in → only public routes allowed.
  if (!user) {
    if (isPublic(pathname)) return response;
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // Logged in: gate on onboarding completion.
  const { data: profile } = await supabase
    .from('profiles')
    .select('onboarding_completed')
    .eq('id', user.id)
    .single();

  const onboardingDone = profile?.onboarding_completed ?? false;

  // The password-reset page is reached *with* a (recovery) session after clicking
  // the email link — always allow it regardless of auth/onboarding state.
  if (pathname === '/reset-password') return response;

  // Logged-in users shouldn't see auth pages.
  if (isPublic(pathname) && !pathname.startsWith('/auth')) {
    const url = request.nextUrl.clone();
    url.pathname = onboardingDone ? '/dashboard' : '/onboarding';
    return NextResponse.redirect(url);
  }

  if (!onboardingDone && pathname !== '/onboarding') {
    const url = request.nextUrl.clone();
    url.pathname = '/onboarding';
    return NextResponse.redirect(url);
  }

  if (onboardingDone && pathname === '/onboarding') {
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  return response;
}
