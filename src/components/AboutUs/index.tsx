'use client';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';
import { Routes } from '@/constants/routes';
import { Link } from '@/navigation';
import Button from '@/UI/Button';
import style from './style.module.scss';

export const AboutUs = () => {
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
          <div className={style.stripe}></div>
          <div className={style.wrapper}>
            <div className={style.small_wrap}>
              <div className={style.about_wrap}>
                <h4 className={style.sub_title}>
                  {t('HomeInfoSection.about_subtitle')}
                </h4>
                <h1 className={style.about_title}>
                  {t('HomeInfoSection.about_title')}
                </h1>
                <p className={style.text}>
                  {t('HomeInfoSection.about_description')}
                </p>
                <div className={style.btn}>
                  <Link href={Routes.AboutUs}>
                    <Button variant="secondary" size="without">
                      {t('HomeInfoSection.link_title')}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className={style.mission_wrap}>
                <h4 className={style.sub_title}>
                  {t('HomeInfoSection.mission_subtitle')}
                </h4>
                <h1 className={style.mission_title}>
                  {t('HomeInfoSection.mission_title')}
                </h1>
                <p className={style.text}>
                  {t('HomeInfoSection.mission_description')}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
