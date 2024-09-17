'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';
import { logos } from '@/constants/logos';
import style from './style.module.scss';

export const FuturedIn = () => {
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
          <div className={style.text_wrap}>
            <p className={style.sub_text}>{t('FeaturedSection.subtitle')}</p>
            <p className={style.text}>{t('FeaturedSection.title')}</p>
          </div>
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
            />
          ))}
        </div>
      )}
    </div>
  );
};
