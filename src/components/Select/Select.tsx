import React, { useEffect, useRef, useState } from 'react';
import Button from 'src/components/inventory/Button';
import ArrowIcon from '../../assets/icons/arrow-down.svg?react';
import styles from './Select.module.scss';

type Props = {
  name: string | undefined;
  label?: string | undefined;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  arrow?: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | undefined;
  options: string[] | undefined;
  iconWidth?: string;
  iconHeight?: number;
  arrowWidth?: number;
  arrowHeight?: number;
  style?: React.CSSProperties;
  textColor?: string;
  gap?: number;
  fontSize?: number;
  color?: string;
  flexibleWidth?: boolean;
  labelGap?: number;
  disabled?: boolean;
};

function Select({
  name,
  label = '',
  icon: Icon,
  arrow: Arrow = ArrowIcon,
  iconWidth,
  iconHeight,
  arrowWidth,
  arrowHeight,
  options,
  gap,
  fontSize = 12,
  color = '',
  flexibleWidth,
  textColor,
  labelGap,
  disabled = false,
  style,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(name);
  const [buttonPadding, setButtonPadding] = useState<Number>(0);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      const element = buttonRef.current;
      const computedStyle = window.getComputedStyle(element);
      const paddingValue = computedStyle.getPropertyValue('padding-left');
      setButtonPadding(parseInt(paddingValue));
    }
  }, []);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };
  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      style={{ gap: `${labelGap}px`, width: flexibleWidth ? '100%' : '' }}
      className={styles.container}
    >
      {label && <span className={styles.label}>{label}</span>}
      <Button
        onClick={toggleSelect}
        onMouseLeave={handleMouseLeave}
        textColor={textColor}
        style={style}
        ref={buttonRef}
      >
        <div className={styles.menu}>
          <div
            className={styles.select}
            style={{
              gap: gap ? `${gap}px` : '',
              fontSize: `${fontSize}px`,
            }}
          >
            {Icon && (
              <Icon width={iconWidth ? iconWidth : 10} height={iconHeight ? iconHeight : 11} />
            )}
            <span
              style={{ color: textColor, marginRight: disabled ? '' : '5px' }}
              className={styles.select__activeOption}
            >
              {activeOption}
            </span>
            {Arrow && !disabled && (
              <Arrow
                width={arrowWidth ? arrowWidth : 10}
                height={arrowHeight ? arrowHeight : 5}
                style={isOpen ? { transform: 'rotate(180deg)' } : {}}
              />
            )}
          </div>
          {isOpen && !disabled && (
            <div
              className={styles.optionContainer}
              style={{
                width: `calc(100% + ${+buttonPadding * 2}px)`,
                left: `-${buttonPadding}px`,
              }}
            >
              <ul className={styles.options} style={{ bottom: `$` }}>
                {options?.map(option => (
                  <li
                    style={{ color }}
                    className={styles.options__option}
                    key={option}
                    onClick={() => {
                      setActiveOption(option);
                      setIsOpen(false);
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Button>
    </div>
  );
}

export default Select;
