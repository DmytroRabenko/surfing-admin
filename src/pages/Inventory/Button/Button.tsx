import React from 'react';
import styles from './Button.module.scss';
type Props = {
  onClick?: () => void;
  onMouseLeave?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  isSelected?: boolean;
  textColor?: string;
  additionalClass?: string;
};

function Button({ onClick, onMouseLeave, style, isSelected, textColor, children }: Props) {
  return (
    <button
      onClick={onClick}
      onMouseLeave={onMouseLeave}
      className={styles.btn}
      style={
        isSelected
          ? { backgroundColor: 'rgb(76, 116, 246)', color: '#ffffff', ...style }
          : { color: textColor, ...style }
      }
    >
      {children}
    </button>
  );
}

export default Button;
