'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { authors } from '@/data/authors';
import { Link } from '@/navigation';
import { POSTS_PER_PAGE } from './constants';
import style from './style.module.scss';

const allPosts = authors.flatMap((author) => author.posts);

export const AllPosts = () => {
  const t = useTranslations();
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = allPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(allPosts.length / POSTS_PER_PAGE)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>{t('BlogPosts.title')}</h1>
      <div className={style.line}></div>
      {currentPosts.map((post) => (
        <Link href={`/blogPostPage/${post.id}`} key={post.id}>
          <div className={style.post_card}>
            <div className={style.image_wrap}>
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={490}
                height={318}
                className={style.image}
              />
            </div>
            <div className={style.text_wrap}>
              <h4 className={style.sub_title}>{post.subtitle}</h4>
              <h1 className={style.card_title}>{post.title}</h1>
              <p className={style.text}>{post.content}</p>
            </div>
          </div>
        </Link>
      ))}
      <div className={style.switch}>
        <p
          className={style.switch_item}
          onClick={handlePrev}
          style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
        >
          <SlArrowLeft className={style.arrow} />
          {t('BlogPosts.Pagination.btn_title_prev')}
        </p>
        <p
          className={style.switch_item}
          onClick={handleNext}
          style={{
            cursor:
              currentPage === Math.ceil(allPosts.length / POSTS_PER_PAGE)
                ? 'not-allowed'
                : 'pointer',
          }}
        >
          {t('BlogPosts.Pagination.btn_title_next')}
          <SlArrowRight className={style.arrow} />
        </p>
      </div>
    </div>
  );
};
