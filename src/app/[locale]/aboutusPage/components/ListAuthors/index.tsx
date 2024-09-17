import { useTranslations } from 'next-intl';
import { authors } from '@/data/authors';
import { Link } from '@/navigation';
import { AuthorCard } from './components/AuthorCard';
import style from './style.module.scss';

export const ListAuthor = () => {
  const t = useTranslations();
  return (
    <div className={style.container}>
      <h1 className={style.title}>{t('AuthorsSection.title')}</h1>
      <div className={style.cards}>
        {authors.map((author) => (
          <Link href={`/authorPage/${author.id}`} key={author.id}>
            <AuthorCard
              avatarSrc={author.avatarSrc}
              name={author.name}
              role={author.role}
              socialLinks={author.socialLinks}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
