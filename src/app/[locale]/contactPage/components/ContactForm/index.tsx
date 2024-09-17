'use client';

import React, { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '@/UI/Button';
import { Input } from '@/UI/Input';
import { schema } from '@/UI/Input/validation';
import { sendEmail } from '@/utils/sendEmail';
import style from './style.module.scss';

interface IFormInput {
  fullName: string;
  email: string;
  queryRelated: string;
  message: string;
}

export const ContactForm: FC = () => {
  const t = useTranslations();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const templateParams = {
        to_email: data.email,
        full_name: data.fullName,
        query_related: data.queryRelated,
        message: data.message,
      };

      await sendEmail(templateParams);

      reset();
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };
  return (
    <div className={style.container}>
      <div className={style.text_wrapper}>
        <h3 className={style.sub_title}>{t('ContactsUs.Heading.subtitle')}</h3>
        <h1 className={style.title}>{t('ContactsUs.Heading.title')}</h1>
        <p className={style.text}>{t('ContactsUs.Heading.information')}</p>
      </div>
      <div className={style.section}>
        <div className={style.left_column}>
          <h4 className={style.ltitle}>
            {t('ContactsUs.ContactData.workingHours')}
          </h4>
          <div className={style.line}></div>
          <p className={style.date_text}>
            {t('ContactsUs.ContactData.mondayToFriday')}
          </p>
          <p className={style.date_text}>
            {t('ContactsUs.ContactData.workTime')}
          </p>
          <p className={style.sup_text}>
            {t('ContactsUs.ContactData.supportAvailable')}
          </p>
        </div>
        <div className={style.right_column}>
          <h4 className={style.ltitle}>
            {t('ContactsUs.ContactData.contactUs')}
          </h4>
          <div className={style.line}></div>
          <p className={style.date_text}>020 7993 2905</p>
          <p className={style.sup_text}>hello@finsweet.com</p>
        </div>
      </div>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          name="fullName"
          placeholder={t('ContactsUs.Form.Placeholders.name')}
          register={register('fullName')}
          error={errors.fullName?.message}
        />

        <Input
          type="email"
          name="email"
          placeholder={t('ContactsUs.Form.Placeholders.email')}
          register={register('email')}
          error={errors.email?.message}
        />

        <div className={style.inputWrapper}>
          <select {...register('queryRelated')} className={style.input}>
            <option value="" disabled>
              {t('ContactsUs.Form.Placeholders.queryRelated')}
            </option>
            <option value="support">Support</option>
            <option value="sales">Sales</option>
            <option value="other">Other</option>
          </select>
          {errors.queryRelated && (
            <p className={style.error}>{errors.queryRelated.message}</p>
          )}
        </div>

        <Input
          type="textarea"
          name="message"
          placeholder={t('ContactsUs.Form.Placeholders.message')}
          register={register('message')}
          error={errors.message?.message}
        />

        <Button
          variant="primary"
          size="large"
          icon={null}
          type="submit"
          disabled={isSubmitting}
          data-testid="submit_btn"
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
};
