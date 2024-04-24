import { useEffect, useState } from 'react';

import s from './StatisticItem.module.scss';

import arrowUp from '../../../assets/icons/arrow-up-stat.svg';
import arrowDown from '../../../assets/icons/arrow-down-stat.svg';
import SkeletonLoading from 'src/components/SkeletonLoading';

interface Props {
  imgPath: string;
  imgAlt: string;
  title: string;
  count: string;
  percent: number;
  period: string;
}

export const StatisticItem = ({ imgPath, imgAlt, title, count, percent, period }: Props) => {
  const positiveStat = percent > 0;

//-----------------delete SkeletonLoading temporarily --------------
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 20000);
  }, []);
//-----------------delete SkeletonLoading temporarily --------------


  return (
    <SkeletonLoading isLoading={isLoading}>
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
    </SkeletonLoading>
  );
};
