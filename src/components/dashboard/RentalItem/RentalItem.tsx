import { Currency, RentalItemT } from '../RentalTable/RentalTable';
import s from './RentalItem.module.scss';

const currencySymbols: Record<Currency, string> = {
  euro: '€',
  usd: '$',
  pound: '£',
};

interface RentalItemProps {
  item: RentalItemT;
}

const RentalItem = ({ item }: RentalItemProps) => {
  return (
    <a href="#!" title={item.title}>
      <div className={s.rentalItem}>
        <div className={s.rentalItem__description}>
          <div className={s.rentalItem__description__image}>
            <img src={item.img} alt={item.title} />
          </div>
          <div className={s.wrapper}>
            <h3 className={s.rentalItem__description__title}>{item.title}</h3>
            <p className={s.rentalItem__description__additional}>{item.description}</p>
          </div>
        </div>
        <div className={s.rentalItem__values}>
          <p className={s.rentalItem__values__stockAmount}>{item.stockAmount}</p>
          <p className={s.rentalItem__values__price}>
            {currencySymbols[item.currency]} {item.price}
          </p>
          <p className={s.rentalItem__values__rentalsAmount}>{item.totalRentals}</p>
        </div>
      </div>
    </a>
  );
};

export default RentalItem;
