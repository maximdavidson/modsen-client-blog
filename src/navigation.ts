import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { LocalePrefix, Pathnames } from 'next-intl/routing';
import { locales } from '@/constants/locales';

export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    ru: '/pathnames',
  },
};

export const localePrefix: LocalePrefix<typeof locales> = 'always';

export const { Link, useRouter, usePathname } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix,
  });
