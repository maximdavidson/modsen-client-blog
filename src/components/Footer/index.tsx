'use client';

import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { socials } from '@/constants/footerSocials';
import { locales } from '@/constants/locales';
import { Routes } from '@/constants/routes';
import { Link, useRouter, usePathname } from '@/navigation';

import Button from '@/UI/Button';
import { sendEmail } from '@/utils/sendEmail';
import style from './style.module.scss';

export const Footer = () => {
  const t = useTranslations();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const templateParams = {
        to_email: email,
      };

      await sendEmail(templateParams);

      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };

  const handleUpdateLanguage = (locale: string) => () => {
    startTransition(() => {
      router.replace({ pathname }, { locale });
    });
  };

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.wrap}>
          <h1 className={style.title}>{t('Logo.title')}</h1>
          <div className={style.navigate_wrap}>
            <nav className={style.navigation}>
              <Link href={Routes.Home}>{t('Navbar.home')}</Link>
              <Link href={Routes.Blog}>{t('Navbar.blog')}</Link>
              <Link href={Routes.AboutUs}>{t('Navbar.about_us')}</Link>
              <Link href={Routes.ContactUs}>{t('Navbar.contact_us')}</Link>
              <Link href={Routes.PrivacyPolicy}>
                {t('Navbar.privacy_policy')}
              </Link>
            </nav>
            <div className={style.language_switch}>
              {locales.map((locale) => (
                <button
                  key={locale}
                  type="button"
                  className={style.switcher_btn}
                  disabled={currentLocale === locale || isPending}
                  onClick={handleUpdateLanguage(locale)}
                >
                  {locale.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={style.subscription}>
          <h2 className={style.sub_text}>{t('SubscribeForm.title')}</h2>
          <form className={style.inputWrapper} onSubmit={handleSubscribe}>
            <input
              className={style.input}
              type="email"
              placeholder={t('SubscribeForm.placeholder')}
              value={email}
              onChange={handleInputChange}
              required
            />

            <div className={style.btnWrapper}>
              <Button variant="primary" size="large" icon={null} type="submit">
                {isSubscribed ? 'Done' : 'Subscribe'}
              </Button>
            </div>
          </form>
        </div>

        <div className={style.bottom}>
          <div className={style.address}>
            <p>Finstreet 118 2561 Fintown</p>
            <p>Hello@finsweet.com 020 7993 2905</p>
          </div>
          <div className={style.socials}>
            {socials.map((social, index) => (
              <a key={index} href={social.href}>
                <Image
                  src={social.src}
                  alt={social.alt}
                  width={16}
                  height={16}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
