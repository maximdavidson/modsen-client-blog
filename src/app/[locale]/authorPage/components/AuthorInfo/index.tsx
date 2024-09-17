'use client';
import { FC } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import style from './style.module.scss';

interface SocialLink {
  src: string;
  alt: string;
}

interface AuthorInfoProps {
  author: {
    avatarSrc: string;
    name: string;
    role: string;
    socialLinks: SocialLink[];
  };
}

export const AuthorInfo: FC<AuthorInfoProps> = ({ author }) => {
  const t = useTranslations();

  return (
    <div className={style.container}>
      <div className={style.image_wrap}>
        <Image
          src={author.avatarSrc}
          alt={`${author.name} Avatar`}
          width={251}
          height={294}
          className={style.image}
        />
      </div>
      <div className={style.text_wrap}>
        <h1 className={style.title}>
          {t('AuthorPage.hello')} {author.name} {t('AuthorPage.welcome')}
        </h1>
        <p className={style.text}>{t('AuthorPage.text')}</p>
        <div className={style.social}>
          {author.socialLinks.map((link) => (
            <Image
              key={link.alt}
              src={link.src}
              alt={link.alt}
              width={16}
              height={16}
            />
          ))}
        </div>
      </div>
      <div className={style.stripe}></div>
    </div>
  );
};
