'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import style from './style.module.scss';

interface Post {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

interface AuthorPostsProps {
  posts: Post[];
}

export const AuthorPosts: React.FC<AuthorPostsProps> = ({ posts }) => {
  const t = useTranslations();
  if (posts.length === 0) {
    return <p className={style.no_result}>{t('AuthorPage.no_result')}</p>;
  }

  return (
    <div className={style.container}>
      <h1 className={style.title}>{t('AuthorPage.title')}</h1>
      {posts.map((post) => (
        <Link key={post.id} href={`/blogPostPage/${post.id}`}>
          <div className={style.post_card} key={post.id}>
            <div className={style.image_wrap}>
              <Image
                className={style.image_post}
                src={post.imageUrl}
                alt={post.title}
                width={412}
                height={320}
              />
            </div>
            <div className={style.text_wrap}>
              <h4 className={style.sub_title}>{post.category}</h4>
              <h1 className={style.card_title}>{post.title}</h1>
              <p className={style.text}>{t('AuthorPage.small_text')}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
