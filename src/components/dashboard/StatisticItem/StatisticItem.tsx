import s from './StatisticItem.module.scss';

import arrowUp from '../../../assets/icons/arrow-up-stat.svg';
import arrowDown from '../../../assets/icons/arrow-down-stat.svg';

interface Props {
  imgPath: string;
  imgAlt: string;
  title: string;
  count: string;
  percent: number;
  period: string;
}

const StatisticItem = ({ imgPath, imgAlt, title, count, percent, period }: Props) => {
  const positiveStat = percent > 0;

  return (
    <>
      <div className={s.item}>
        <div className={s.item__imgContainer}>
          <img className={s.item__img} src={imgPath} alt={imgAlt} />
        </div>
        <div className={s.item__wrapper}>
          <span className={s.item__title}>{title}</span>
          <span className={s.item__count}>{count}</span>
          <div className={s.item__statistic}>
            <img src={positiveStat ? arrowUp : arrowDown} alt="arrow up" />
            <span
              className={positiveStat ? s.item__positiveStatistic : s.item__negativeStatistic}
            >
              {percent}%
            </span>
            this {period}
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticItem