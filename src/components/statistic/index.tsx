import s from './statistic.module.scss';

import moneyReceive from '../../assets/images/icons/money-receive.svg';
import walletMoney from '../../assets/images/icons/wallet-money.svg';
import boards from '../../assets/images/icons/boards.svg';
import arrowUp from '../../assets/images/icons/arrow-up-stat.svg';
import arrowDown from '../../assets/images/icons/arrow-down-stat.svg';

const Statistic = () => {
  return (
    <div className={s.statisticBlock}>
      <div className={s.item}>
        <div className={s.itemImg}>
          <img src={moneyReceive} alt="Money receive" />
        </div>
        <div className={s.itemWrapper}>
          <span className={s.title}>Earning</span>
          <span className={s.count}>$198k</span>
          <div className={s.statistic}>
            <img src={arrowUp} alt="arrow up" /> <span className={s.statisticPercentPositive}>37.8% </span>
            this month
          </div>
        </div>
      </div>
      <span className={s.delimiter}></span>
      <div className={s.item}>
        <div className={s.itemImg}>
          <img src={walletMoney} alt="Wallet money" />
        </div>
        <div className={s.itemWrapper}>
          <span className={s.title}>Total income</span>
          <span className={s.count}>$2.4k</span>
          <div className={s.statistic}>
            <img src={arrowDown} alt="arrow down" /> <span className={s.statisticPercentNegative}>2% </span>
            this month
          </div>
        </div>
      </div>
      <span className={s.delimiter}></span>
      <div className={s.item}>
        <div className={s.itemImg}>
          <img src={boards} alt="boards" />
        </div>
        <div className={s.itemWrapper}>
          <span className={s.title}>Total Rentals</span>
          <span className={s.count}>1302</span>
          <div className={s.statistic}>
            <img className={s.statisticImg} src={arrowUp} alt="arrow up" />
            <span className={s.statisticPercentPositive}>11% </span> this week
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
