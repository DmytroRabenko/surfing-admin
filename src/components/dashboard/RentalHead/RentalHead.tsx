import { DropdawnOptions, DropdownMenu } from '../DropDawnMenu/DropdownMenu';
import SearchForm from '../SearchForm';
import s from './RentalHead.module.scss';

interface RentalHeadProps {
  handleTermChange: (term: string) => void;
  handleSearch: (query: string) => void;
  title: string;
}
export const dropDownOptions: DropdawnOptions[] = [
  { value: 'quartal', label: 'Quarterly' },
  { value: 'month', label: 'Last 30 days' },
  { value: 'week', label: 'Last week' },
  { value: 'day', label: 'Today' },
];

const TableHeading = () => {
  return (
    <>
      <div className={s.tableHeading}>
        <div className={s.tableHeading}>Product Name</div>
        <div className={s.wrapper}>
          <div>Stock</div>
          <div>Price</div>
          <div>Total Rentals</div>
        </div>
      </div>
      <div className={s.divider} />
    </>
  );
};

const RentalHead = ({ handleSearch, handleTermChange, title }: RentalHeadProps) => {
  return (
    <div className={s.rentalHead}>
      <div className={s.rentalHead__row}>
        <h2 className={s.rentalHead__title}>{title}</h2>
        <SearchForm variant="#F3F3F3" onSearch={handleSearch} />
        <DropdownMenu onHandleChange={handleTermChange} options={dropDownOptions} />
      </div>
      <TableHeading />
    </div>
  );
};

export default RentalHead;
