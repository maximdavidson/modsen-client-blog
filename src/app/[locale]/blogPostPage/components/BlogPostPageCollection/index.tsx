'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { authors } from '@/data/authors';
import { Link } from '@/navigation';
import { NUMBER_OF_BLOG_POSTS_TO_DISPLAY } from './constants';
import style from './style.module.scss';

export const BlogCollection = () => {
  const posts = authors.flatMap((author) =>
    author.posts.map((post) => ({ ...post, author: author.name })),
  );
  const t = useTranslations();

  return (
    <div className={style.collection}>
      <h2 className={style.collection_title}>{t('BlogPost.whatToReadNext')}</h2>
      <div className={style.collection_grid}>
        {posts.slice(0, NUMBER_OF_BLOG_POSTS_TO_DISPLAY).map((post) => (
          <Link key={post.id} href={`/blogPostPage/${post.id}`}>
            <div className={style.collection_item}>
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={405}
                height={318}
                className={style.collection_image}
              />
              <div className={style.collection_content}>
                <p className={style.collection_meta}>
                  By
                  <span className={style.collection_author}>
                    {post.author}
                  </span>{' '}
                  | {post.date}
                </p>
                <h3 className={style.collection_title}>{post.title}</h3>
                <p className={style.collection_description}>{post.content}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className={style.line}></div>
    </div>
  );
};
