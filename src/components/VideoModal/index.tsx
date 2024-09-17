import React, { FC, useEffect } from 'react';
import style from './style.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, videoSrc }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={style.modalOverlay} onClick={onClose}>
      <div className={style.modalContent} onClick={handleContentClick}>
        <button className={style.closeButton} onClick={onClose}>
          x
        </button>
        <video src={videoSrc} controls autoPlay className={style.videoPlayer} />
      </div>
    </div>
  );
};
