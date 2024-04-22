import pageStyle from '../../../pages/Dashboard/Dashboard.module.scss';
import s from './RentalTable.module.scss';
import boardImg from '../../../assets/images/rental-item.png';
import RentalList from '../RentalList';
import RentalHead from '../RentalHead';
import { useState } from 'react';

const combineStyles = [pageStyle.contentWrapper__rounded, s.rentalTable].join(' ');

export type Currency = 'euro' | 'usd' | 'pound';
export type RentalItemT = {
  img: string;
  title: string;
  description: string;
  stockAmount: number;
  price: number;
  totalRentals: number;
  currency: Currency;
};

const rentalData: RentalItemT[] = [
  {
    description: 'Rent this board with us today and get discount.',
    img: boardImg,
    stockAmount: 32,
    price: 45.99,
    title: 'Lovely Surf Board',
    totalRentals: 20,
    currency: 'euro',
  },
  {
    description: 'Rent this board with us today and get discount.',
    img: boardImg,
    stockAmount: 32,
    price: 45.99,
    title: 'Lovely Surf Board',
    totalRentals: 20,
    currency: 'euro',
  },
  {
    description: 'Rent this board with us today and get discount.',
    img: boardImg,
    stockAmount: 32,
    price: 45.99,
    title: 'Lovely Surf Board',
    totalRentals: 20,
    currency: 'euro',
  },
];

const RentalTable = () => {
  const [periodRange, setPeriodRange] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleTermChange = (selectedTerm: string) => {
    setPeriodRange(selectedTerm);
    
    // Fix deploy error
    console.log(periodRange);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredData = rentalData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={combineStyles}>
      <RentalHead
        handleSearch={handleSearch}
        handleTermChange={handleTermChange}
        title="Top monthly rentals"
      />
      <RentalList rentalData={filteredData} />
    </div>
  );
};

export default RentalTable;
