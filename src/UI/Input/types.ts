import { UseFormRegisterReturn } from 'react-hook-form';

export type InputProps = {
  type: 'text' | 'email' | 'textarea';
  name: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
  className?: string;
};
