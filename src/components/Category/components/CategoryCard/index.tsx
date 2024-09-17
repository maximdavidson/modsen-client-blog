import Image from 'next/image';
import style from './style.module.scss';

interface CategoryCardProps {
  iconSrc: string;
  iconAlt: string;
  iconWidth: number;
  iconHeight: number;
  title: string;
  description: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  iconSrc,
  iconAlt,
  iconWidth,
  iconHeight,
  title,
  description,
}) => (
  <div className={style.card}>
    <Image
      src={iconSrc}
      alt={iconAlt}
      width={iconWidth}
      height={iconHeight}
      className={style.ico}
    />
    <h2 className={style.card_title}>{title}</h2>
    <p className={style.text}>{description}</p>
  </div>
);
