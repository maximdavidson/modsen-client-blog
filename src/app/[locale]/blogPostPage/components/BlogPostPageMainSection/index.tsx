import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Post } from '@/data/authors';
import style from './style.module.scss';

interface BlogPostPageMainSectionProps {
  post: Post;
  author: {
    name: string;
    avatarSrc: string;
    role: string;
  };
}

export const BlogPostPageMainSection = ({
  post,
  author,
}: BlogPostPageMainSectionProps) => {
  const t = useTranslations();
  return (
    <div className={style.container}>
      <div className={style.person_card_wrap}>
        <div className={style.person_card}>
          <div className={style.avatar}>
            <Image
              src={author.avatarSrc}
              alt="Avatar"
              width={48}
              height={48}
              className={style.avatar_image}
            />
          </div>
          <div className={style.user_info}>
            <h2 className={style.user_name}>{author.name}</h2>
            <p className={style.user_date}>
              {t('BlogPost.postedOn')} {post.date}
            </p>
          </div>
        </div>
        <h1 className={style.title}>{post.title}</h1>
        <div className={style.startup_wrap}>
          <Image
            src="/images/shuttle.png"
            alt="Startup"
            width={30}
            height={30}
            className={style.startup_icon}
          />
          <span className={style.startup_text}>{post.category}</span>
        </div>
      </div>
      <Image
        src={post.imageUrl}
        alt="Post Image"
        width={1280}
        height={582}
        className={style.main_image}
      />
      <div className={style.text_side}>
        <div className={style.first_paragraph}>
          <h1 className={style.text_title}>{post.title}</h1>
          <p className={style.text}>{post.content}</p>
        </div>
      </div>
      <div className={style.text_side}>
        <div className={style.first_paragraph}>
          <h1 className={style.text_title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </h1>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus. Sociis natoque penatibus
            et magnis dis parturient montes. Ridiculus mus mauris vitae
            ultricies leo. Neque egestas congue quisque egestas diam. Risus in
            hendrerit gravida rutrum quisque non.
          </p>
        </div>
        <div className={style.second_paragraph}>
          <h1 className={style.text_title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </h1>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus. Sociis natoque penatibus
            et magnis dis parturient montes. Ridiculus mus mauris vitae
            ultricies leo. Neque egestas congue quisque egestas diam. Risus in
            hendrerit gravida rutrum quisque non.
          </p>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus. Sociis natoque penatibus
            et magnis dis parturient montes. Ridiculus mus mauris vitae
            ultricies leo. Neque egestas congue quisque egestas diam. Risus in
            hendrerit gravida rutrum quisque non.
          </p>
          <ul className={style.list}>
            <li className={style.list_item}>Lorem ipsum dolor sit amet</li>
            <li className={style.list_item}>
              Non blandit massa enim nec scelerisque
            </li>
            <li className={style.list_item}>
              Neque egestas congue quisque egestas
            </li>
          </ul>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus. Sociis natoque penatibus
            et magnis dis parturient montes. Ridiculus mus mauris vitae
            ultricies leo. Neque egestas congue quisque egestas diam. Risus in
            hendrerit gravida rutrum quisque non.
          </p>
        </div>
        <div className={style.first_paragraph}>
          <h1 className={style.text_title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </h1>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus. Sociis natoque penatibus
            et magnis dis parturient montes. Ridiculus mus mauris vitae
            ultricies leo. Neque egestas congue quisque egestas diam. Risus in
            hendrerit gravida rutrum quisque non.
          </p>
        </div>
      </div>
    </div>
  );
};
