import { useState } from 'react';

import Button from '../Button';

import FirstPositionIcon from '../../../assets/icons/horizontal-stripes.svg?react';
import SecondPositionIcon from '../../../assets/icons/stair-reverse.svg?react';

import vars from '../../../assets/scss/vars.module.scss';
import styles from './PositionSwitcher.module.scss';

type Props = {};

function PositionSwitcher({}: Props) {
  const { colorBlue,colorTextGray6 } = vars;

  const [isFirstSelected, setIsFirstSelected] = useState(true);
  const [isSecondSelected, setIsSecondSelected] = useState(false);

  const handleFirstButtonClick = () => {
    setIsFirstSelected(true);
    setIsSecondSelected(false);
  };

  const handleSecondButtonClick = () => {
    setIsFirstSelected(false);
    setIsSecondSelected(true);
  };
  return (
    <div className={styles.positionBtns}>
      <Button
        onClick={handleFirstButtonClick}
        style={isFirstSelected ? { filter: 'drop-shadow(-2px 0 8px rgba(0, 0, 0,0.05))' } : {}}
      >
        <FirstPositionIcon
          stroke={isFirstSelected ? colorBlue : colorTextGray6}
          width={11}
          height={10}
        />
      </Button>
      <Button
        onClick={handleSecondButtonClick}
        style={isSecondSelected ? { filter: 'drop-shadow(2px 0 8px rgba(0, 0, 0,0.05))' } : {}}
      >
        <SecondPositionIcon
          stroke={isSecondSelected ? colorBlue : colorTextGray6}
          width={11}
          height={10}
        />
      </Button>
    </div>
  );
}

export default PositionSwitcher;
