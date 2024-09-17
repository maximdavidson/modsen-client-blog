'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';
import { testimonials } from '@/constants/testimonials';
import style from './style.module.scss';

export const Testimonial = () => {
  const t = useTranslations();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [_, setDirection] = useState(0);
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

  const handlePrevClick = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const handleNextClick = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className={style.container} ref={ref}>
      {isVisible && (
        <>
          <div className={style.leftSection}>
            <h5 className={style.sub_title}>
              {t('TestimonialsSection.subtitle')}
            </h5>
            <h2 className={style.title}>{t('TestimonialsSection.title')}</h2>
            <p className={style.description}>
              {t('TestimonialsSection.description')}
            </p>
          </div>
          <div className={style.rightSection}>
            <p className={style.testimonialText}>{currentTestimonial.text}</p>

            <div className={style.authorSection}>
              <div className={style.profile}>
                <Image
                  src={currentTestimonial.avatar}
                  alt={`${currentTestimonial.author} Avatar`}
                  width={48}
                  height={48}
                  className={style.avatar}
                />
                <div className={style.authorInfo}>
                  <h3 className={style.name}>{currentTestimonial.author}</h3>
                  <p className={style.location}>
                    {currentTestimonial.location}
                  </p>
                </div>
              </div>
              <div className={style.navigation}>
                <button className={style.navButton} onClick={handlePrevClick}>
                  <span className={style.navArrow}>&larr;</span>
                </button>
                <button className={style.navButton} onClick={handleNextClick}>
                  <span className={style.navArrow}>&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
