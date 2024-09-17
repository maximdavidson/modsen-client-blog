'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SlArrowRight } from 'react-icons/sl';
import { useInView } from 'react-intersection-observer';
import { posts } from '@/constants/futuresPostMock';
import { Routes } from '@/constants/routes';
import { Link } from '@/navigation';
import Button from '@/UI/Button';
import style from './style.module.scss';

export const FeaturedPosts = () => {
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
          <div className={style.feature_wrap}>
            <h1 className={style.title}>
              {t('HomePostsSection.featuredPost')}
            </h1>
            <div className={style.post_wrap}>
              <Image
                src="/images/featuredPosts.png"
                alt="Featured Post Image"
                width={669}
                height={352}
                className={style.backgroundImage}
              />
              <p className={style.sub_text}>
                {t('Post.by')}
                <span className={style.sub_text_span}>James Doe</span> | May 23,
                2022
              </p>
              <h1 className={style.title}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </h1>
              <p className={style.text}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
              <Link href={Routes.Post}>
                <Button variant="primary" size="medium" icon={<SlArrowRight />}>
                  {t('Post.btn_title')}
                </Button>
              </Link>
            </div>
          </div>

          <div className={style.all_wrap}>
            <div className={style.title_wrap}>
              <h1 className={style.title}> {t('HomePostsSection.allPosts')}</h1>
              <Link className={style.link} href={Routes.Blog}>
                {t('HomePostsSection.viewAll')}
              </Link>
            </div>

            {posts.map((post) => (
              <div key={post.id} className={style.post_item}>
                <p className={style.item_text}>
                  {t('Post.by')}
                  <span className={style.item_text}>{post.author}</span> |{' '}
                  {post.date}
                </p>
                <h1 className={style.item_title}>{post.title}</h1>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
