'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Routes } from '@/constants/routes';
import { Link } from '@/navigation';
import style from './style.module.scss';
import menuIconClose from '../../../public/images/menuIcon-close.png';
import menuIcon from '../../../public/images/menuIcon.png';
import { Modal } from '../VideoModal';

export const Header = () => {
  const t = useTranslations();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleVideoButtonClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={style.container}>
      <h1 className={style.title}> {t('Logo.title')}</h1>
      <div className={style.navigate_wrap}>
        <div className={style.burger_menu} onClick={toggleMenu}>
          <Image
            src={isMenuOpen ? menuIconClose : menuIcon}
            alt="Menu Icon"
            width={24}
            height={24}
          />
        </div>
        <nav className={`${style.navigation} ${isMenuOpen ? style.open : ''}`}>
          <Link href={Routes.Home}>{t('Navbar.home')}</Link>
          <Link href={Routes.Blog}>{t('Navbar.blog')}</Link>
          <Link href={Routes.AboutUs}>{t('Navbar.about_us')}</Link>
          <Link href={Routes.ContactUs}>{t('Navbar.contact_us')}</Link>
        </nav>
        <button className={style.video_btn} onClick={handleVideoButtonClick}>
          {t('ModalVideo.btn_title')}
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoSrc="/videos/videoplayback.mp4"
      />
    </header>
  );
};
