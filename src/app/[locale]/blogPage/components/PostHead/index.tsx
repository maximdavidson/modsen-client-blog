import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SlArrowRight } from 'react-icons/sl';
import Button from '@/UI/Button';
import style from './style.module.scss';

export const PostHead = () => {
  const t = useTranslations();
  return (
    <div className={style.container}>
      <div className={style.text_wrap}>
        <h3 className={style.sub_title}>{t('BlogPosts.subtitle_header')}</h3>
        <h1 className={style.title}>
          Step-by-step guide to choosing great font pairs
        </h1>
        <p className={style.name_date}>
          {t('Post.by')} <span className={style.name}>John Doe</span> | May 23,
          2022
        </p>
        <p className={style.text}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <Button variant="primary" size="medium" icon={<SlArrowRight />}>
          {t('Post.btn_title')}
        </Button>
      </div>
      <div className={style.image_wrap}>
        <Image
          src="/images/postPage.png"
          alt="Post page Image Header"
          width={515}
          height={359}
          className={style.image}
        />
      </div>
    </div>
  );
};
