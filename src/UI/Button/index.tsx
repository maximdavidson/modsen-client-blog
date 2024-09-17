import { SlArrowRight } from 'react-icons/sl';
import buttonVariants from './buttonVariants';
import style from './style.module.scss';
import { ButtonProps } from './types';

const Button = ({
  variant,
  size = 'medium',
  type = 'button',
  disabled = false,
  dataCy = '',
  icon = <SlArrowRight className={style.icon} />,
  children,
  onClick,
}: ButtonProps) => {
  const variantClass = style[buttonVariants[variant]];
  const sizeClass = style[size];
  const className = `${style.button} ${variantClass} ${sizeClass}`;

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
      data-cy={dataCy}
    >
      <span className={style.content}>
        {children}
        {icon && <span className={style.iconWrapper}>{icon}</span>}{' '}
      </span>
    </button>
  );
};

export default Button;
