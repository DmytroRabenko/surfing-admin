import React, { useState, useEffect, useRef } from 'react';
import ArrowIcon from '../../assets/icons/arrow-down.svg?react';
import styles from './Select.module.scss';
type Props = {
  name: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  options: string[];
  iconWidth?: string;
  iconHeight?: number;
};

function Select({ name, icon: Icon, options }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(name);
  const selectRef = useRef<HTMLDivElement>(null);
  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className={styles.container} ref={selectRef}>
      <div onClick={toggleSelect} className={styles.select} ref={selectRef}>
        {Icon && <Icon width={10} height={11} />}
        <span className={styles.select__activeOption}>{activeOption}</span>
        <ArrowIcon width={10} height={5} style={isOpen ? { transform: 'rotate(180deg)' } : {}} />
      </div>
      {isOpen && (
        <ul className={styles.options}>
          {options.map(option => (
            <li
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
      )}
    </div>
  );
}

export default Select;
