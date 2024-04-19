import { RentalItemT } from '../RentalTable/RentalTable';
import RentalItem from '../RentalItem';
import s from './RentalList.module.scss';

interface RentalListProps {
  rentalData: RentalItemT[];
}

const RentalList = ({ rentalData }: RentalListProps) => {
  if (rentalData.length === 0) {
    return <div style={{ textAlign: 'center' }}>No rentals found.</div>;
  }
  return (
    <div className={s.rentalList}>
      {rentalData.map((el, idx) => (
        <RentalItem item={el} key={idx} />
      ))}
    </div>
  );
};

export default RentalList;
