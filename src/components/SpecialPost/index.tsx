'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SlArrowRight } from 'react-icons/sl';
import { useInView } from 'react-intersection-observer';
import { Routes } from '@/constants/routes';
import { Link } from '@/navigation';
import Button from '@/UI/Button';
import style from './style.module.scss';

export const SpecialPost = () => {
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
        <div className={style.wrapper}>
          <div className={style.image_wrap}>
            <Image
              src="/images/specialPost.png"
              alt="Image Special Post Side"
              width={979}
              height={705}
              className={style.image}
            />
          </div>
          <div className={style.content}>
            <h3 className={style.sub_title}>
              {t('WhyStartedSection.subtitle')}
            </h3>
            <h1 className={style.title}>{t('WhyStartedSection.title')}</h1>
            <p className={style.text}>{t('WhyStartedSection.description')}</p>
            <Link href={Routes.AboutUs}>
              <Button variant="primary" size="medium" icon={<SlArrowRight />}>
                {t('WhyStartedSection.btn_title')}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
