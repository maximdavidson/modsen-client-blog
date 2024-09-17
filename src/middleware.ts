import createMiddleware from 'next-intl/middleware';
import { locales } from '@/constants/locales';

export default createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'always',
});

export const config = {
  matcher: ['/', '/(ru|en)/:path*'],
};
