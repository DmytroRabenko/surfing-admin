import { ButtonHTMLAttributes, FC } from 'react';

import style from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  mods: string[];
}

const Button: FC<ButtonProps> = ({ mods, children, ...restProps }) => {
  const classNames = [style.btn, ...mods.map(mod => style[`btn--${mod}`])].join(' ');
  return (
    <button type="button" className={classNames} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
