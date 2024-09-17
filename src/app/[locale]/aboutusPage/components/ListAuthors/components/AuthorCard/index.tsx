import Image from 'next/image';
import style from './style.module.scss';

interface SocialLink {
  src: string;
  alt: string;
}

interface AuthorCardProps {
  avatarSrc: string;
  name: string;
  role: string;
  socialLinks: SocialLink[];
}

export const AuthorCard: React.FC<AuthorCardProps> = ({
  avatarSrc,
  name,
  role,
  socialLinks,
}) => {
  return (
    <div className={style.card}>
      <Image
        src={avatarSrc}
        alt={`${name} Avatar`}
        width={128}
        height={128}
        className={style.avatar}
      />
      <h2 className={style.name}>{name}</h2>
      <p className={style.text}>{role}</p>
      <div className={style.image_row}>
        {socialLinks.map((link) => (
          <Image
            key={link.alt}
            src={link.src}
            alt={link.alt}
            width={16}
            height={16}
          />
        ))}
      </div>
    </div>
  );
};
