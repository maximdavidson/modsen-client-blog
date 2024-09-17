'use client';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';
import { Routes } from '@/constants/routes';
import { Link } from '@/navigation';
import Button from '@/UI/Button';
import style from './style.module.scss';

export const JoinUs = () => {
  const t = useTranslations();
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div className={style.container} ref={ref}>
      {isVisible && (
        <>
          <h1 className={style.title}>{t('JoinSection.title')}</h1>
          <p className={style.text}>{t('JoinSection.description')}</p>
          <Link href={Routes.ContactUs}>
            <Button variant="primary" size="medium" icon={null}>
              {t('JoinSection.btn_title')}
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};
