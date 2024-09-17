import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import style from './style.module.scss';

export type InputProps = {
  type: 'text' | 'email' | 'textarea';
  name: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
  className?: string;
};

export const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder,
  register,
  error,
  className,
}) => {
  const { ref, ...rest } = register;

  return (
    <div className={`${style.inputWrapper} ${className}`}>
      {type === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          className={style.textarea}
          ref={ref}
          {...rest}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={style.input}
          ref={ref}
          {...rest}
        />
      )}
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
};
