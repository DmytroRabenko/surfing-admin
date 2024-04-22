import { FC } from 'react';

import SentIcon from 'src/assets/icons/sent.svg?react';
import ReadIcon from 'src/assets/icons/read.svg?react';

import style from './Indicator.module.scss';

interface IndicatorProps {
  isSent: boolean;
  isRead: boolean
}

const Indicator: FC<IndicatorProps> = ({
  isSent,
  isRead,
}) => {
  return (
    <div className={style.indicator}>
      <div className={`${style.indicator__icon} ${style.indicator__icon_sent} ${isSent ? style.active : ''}`}>
        <SentIcon />
      </div>
      <div className={`${style.indicator__icon} ${style.indicator__icon_read} ${isRead ? style.active : ''}`}>
        <ReadIcon />
      </div>
    </div>
  );
};

export default Indicator;
