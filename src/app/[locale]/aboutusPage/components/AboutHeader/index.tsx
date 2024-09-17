import Image from 'next/image';
import { useTranslations } from 'next-intl';
import style from './style.module.scss';

export const AboutHeader = () => {
  const t = useTranslations();
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.about_head}>
          <div className={style.head_card}>
            <h4 className={style.sub_title}>{t('AboutUs.Heading.subtitle')}</h4>
            <h1 className={style.card_title}>{t('AboutUs.Heading.title')}</h1>
          </div>
          <p className={`${style.text} ${style.text_none_mobile}`}>
            {t('AboutUs.Heading.description')}
          </p>
        </div>
        <div className={style.poster_wrap}>
          <div className={style.poster}>
            <Image
              className={style.poster_image}
              src="/images/aboutUsBack.png"
              alt="About Us Background"
              width={1360}
              height={444}
            />
          </div>
          <div className={style.info_in_poster_wrap}>
            <div className={style.text_in_poster}>
              <div className={style.stat}>
                <h3 className={style.statNumber}>12+</h3>
                <p className={style.statLabel}>
                  {t('AboutUs.Overview.blogsPublished')}
                </p>
              </div>
              <div className={style.stat}>
                <h3 className={style.statNumber}>18K+</h3>
                <p className={style.statLabel}>{t('AboutUs.Overview.views')}</p>
              </div>
              <div className={style.stat}>
                <h3 className={style.statNumber}>30K+</h3>
                <p className={style.statLabel}>
                  {t('AboutUs.Overview.totalUsers')}
                </p>
              </div>
            </div>
            <div className={style.stripe}></div>
          </div>
        </div>
      </div>

      <div className={style.text_under_poster}>
        <div className={style.left_side}>
          <h4 className={style.sub_title}>
            {t('AboutUs.Community.subtitle_mission')}
          </h4>
          <h1 className={style.text_under_post_title}>
            {t('AboutUs.Community.title_mission')}
          </h1>
          <p className={style.text}>
            {t('AboutUs.Community.description_mission')}
          </p>
        </div>
        <div className={style.right_side}>
          <h4 className={style.sub_title}>
            {t('AboutUs.Community.subtitle_vision')}
          </h4>
          <h1 className={style.text_under_post_title}>
            {t('AboutUs.Community.title_vision')}
          </h1>
          <p className={style.text}>
            {t('AboutUs.Community.description_vision')}
          </p>
        </div>
      </div>

      <div className={style.text_card_wrap}>
        <div className={style.top_card}>
          <div className={style.text_side}>
            <h1 className={style.text_card_title}>
              {t('AboutUs.Details.title_1')}
            </h1>
            <h3 className={style.text_card_subtitle}>
              {t('AboutUs.Details.subtitle_1')}
            </h3>
            <p className={style.text}>{t('AboutUs.Details.description_1')}</p>
          </div>
          <div className={style.image_side}>
            <Image
              className={style.card_image}
              src="/images/hands.png"
              alt="About Us Hands Background"
              width={624}
              height={480}
            />
            <div className={style.shape}></div>
          </div>
        </div>
        <div className={style.down_card}>
          <div className={style.image_side}>
            <Image
              className={style.card_image}
              src="/images/people.png"
              alt="About Us Hands Background"
              width={624}
              height={480}
            />
            <div className={style.circle}></div>
          </div>
          <div className={style.text_side}>
            <h1 className={style.text_card_title}>
              {t('AboutUs.Details.title_2')}
            </h1>
            <h3 className={style.text_card_subtitle}>
              {t('AboutUs.Details.subtitle_2')}
            </h3>
            <p className={style.text}>{t('AboutUs.Details.description_2')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
