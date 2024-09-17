'use client';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';
import { Routes } from '@/constants/routes';
import { authors } from '@/data/authors';
import { Link } from '@/navigation';
import { AuthorCard } from './components/AuthorCard';
import { AUTHOR_LIST_LIMIT } from './constants';
import style from './style.module.scss';

export const ListOfAuthors = () => {
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
          <h1 className={style.title}>{t('AuthorsSection.title')}</h1>
          <div className={style.cards}>
            {authors.slice(0, AUTHOR_LIST_LIMIT).map((author) => (
              <Link href={`${Routes.Author}/${author.id}`} key={author.id}>
                <AuthorCard
                  avatarSrc={author.avatarSrc}
                  name={author.name}
                  role={author.role}
                  socialLinks={author.socialLinks}
                />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
