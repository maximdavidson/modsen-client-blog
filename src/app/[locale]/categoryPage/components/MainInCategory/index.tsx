'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Post } from '@/data/authors';
import { Link } from '@/navigation';
import style from './style.module.scss';

interface MainOfCategoryProps {
  posts: Post[];
}

export const MainOfCategory = ({ posts }: MainOfCategoryProps) => {
  const t = useTranslations();
  return (
    <div className={style.container}>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Link href={`/blogPostPage/${post.id}`} key={post.id}>
            <div className={style.post_card}>
              <div className={style.image_wrap}>
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={294}
                  height={312}
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
        ))
      ) : (
        <p className={style.no_posts_message}>{t('Category.no_post_found')}</p>
      )}
    </div>
  );
};
