import s from './statistic.module.scss';

import arrowUp from '../../assets/images/icons/arrow-up-stat.svg';
import arrowDown from '../../assets/images/icons/arrow-down-stat.svg';

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
        <div className={s.itemImgContainer}>
          <img className={s.itemImg} src={imgPath} alt={imgAlt} />
        </div>
        <div className={s.itemWrapper}>
          <span className={s.title}>{title}</span>
          <span className={s.count}>{count}</span>
          <div className={s.statistic}>
            <img src={positiveStat ? arrowUp : arrowDown} alt="arrow up" />
            <span
              className={positiveStat ? s.statisticPercentPositive : s.statisticPercentNegative}
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

export default StatisticItem;
