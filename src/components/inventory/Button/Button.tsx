import React from 'react';
import styles from './Button.module.scss';

type Props = {
  onClick?: () => void;
  openModal?: () => void;
  onMouseLeave?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  isSelected?: boolean;
  textColor?: string;
  additionalClass?: string;
};

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ onClick, onMouseLeave, style, isSelected, textColor, children }: Props, ref) => {
    const btnStyle = isSelected
      ? { backgroundColor: 'rgb(76, 116, 246)', color: '#ffffff' }
      : { color: textColor };

    return (
      <button
        onClick={onClick}
        onMouseLeave={onMouseLeave}
        className={styles.btn}
        style={{ ...btnStyle, ...style }}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

export default Button;
