import s from './Statistic.module.scss';

import StatisticItem from '../StatisticItem';

import moneyReceive from '../../../assets/icons/money-receive.svg';
import walletMoney from '../../../assets/icons/wallet-money.svg';
import boards from '../../../assets/icons/boards.svg';

const Statistic = () => {
  return (
    <div className={s.statistic}>
      <StatisticItem
        imgPath={moneyReceive}
        imgAlt="Money receive"
        title="Earning"
        count={`$${189}k`}
        percent={37.8}
        period="month"
      />
      <span className={s.delimiter}></span>
      <StatisticItem
        imgPath={walletMoney}
        imgAlt="Wallet money"
        title="Total income"
        count={`$${2.4}k`}
        percent={-2}
        period="month"
      />
      <span className={s.delimiter}></span>
      <StatisticItem
        imgPath={boards}
        imgAlt="Boards"
        title="Total Rentals"
        count={`1302`}
        percent={11}
        period="week"
      />
    </div>
  );
};

export default Statistic


