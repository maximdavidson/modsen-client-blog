import { useTranslations } from 'next-intl';
import style from './style.module.scss';

export const PolicyInfo = () => {
  const t = useTranslations();
  return (
    <div className={style.container}>
      <div className={style.title_wrap}>
        <h1 className={style.titlef}>{t('PrivacyPolicy.Heading.title')}</h1>
        <p className={style.textf}>{t('PrivacyPolicy.Heading.subtitle')}</p>
      </div>
      <div className={style.main_wrap}>
        <h1 className={style.title}>{t('PrivacyPolicy.Content.title_1')}</h1>
        <p className={style.text}>{t('PrivacyPolicy.Content.description_1')}</p>
        <h1 className={style.title}>{t('PrivacyPolicy.Content.title_2')}</h1>
        <p className={style.text}>
          {t('PrivacyPolicy.Content.description_2')}
          <br />
          <br />
          {t('PrivacyPolicy.Content.description_2')}
        </p>
      </div>
    </div>
  );
};
