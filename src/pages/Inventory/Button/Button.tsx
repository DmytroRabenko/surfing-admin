import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';
type Props = {
  onClick?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  isSelected?: boolean;
  textColor?: string;
  additionalClass?: string;
};

function Button({ onClick, style, isSelected, textColor, additionalClass, children }: Props) {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.btn, additionalClass ? additionalClass : '')}
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
