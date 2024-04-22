import React, { useState } from 'react';
import Button from 'src/pages/Inventory/Button';
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

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };
  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <Button onClick={toggleSelect} onMouseLeave={handleMouseLeave}>
      <div className={styles.container}>
        <div className={styles.select}>
          {Icon && <Icon width={10} height={11} />}
          <span className={styles.select__activeOption}>{activeOption}</span>
          <ArrowIcon width={10} height={5} style={isOpen ? { transform: 'rotate(180deg)' } : {}} />
        </div>
        {isOpen && (
          <>
            <div className={styles.optionContainer}>
              <ul className={styles.options} style={{ bottom: `$` }}>
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
            </div>
          </>
        )}
      </div>
    </Button>
  );
}

export default Select;
