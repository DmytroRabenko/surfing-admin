import { useEffect, useState } from 'react';
import TableRow from '../TableRow';
import styles from './Table.module.scss';
import SkeletonLoading from 'src/components/SkeletonLoading';
type Props = {};
const inventory = [
  {
    name: 'Item 1',
    qr: 'Open',
    id: '001',
    availability: 'Available',
    price: 10,
    registered: '2024-04-20',
    action: true,
    groupNumber:1
  },
  {
    name: 'Item 2',
    qr: 'Open',
    id: '002',
    availability: 'Booked',
    price: 15,
    registered: '2024-04-18',
    action: false,
    groupNumber:2
  },
  {
    name: 'Item 3',
    qr: 'Open',
    id: '003',
    availability: 'Available',
    price: 20,
    registered: '2024-04-22',
    action: true,
    groupNumber:1
  },
  {
    name: 'Item 4',
    qr: 'Open',
    id: '004',
    availability: 'Booked',
    price: 25,
    registered: '2024-04-16',
    action: false,
    groupNumber:3
  },
  {
    name: 'Item 5',
    qr: 'Open',
    id: '005',
    availability: 'Available',
    price: 30,
    registered: '2024-04-19',
    action: true,
    groupNumber:2
  },
  {
    name: 'Item 6',
    qr: 'Open',
    id: '006',
    availability: 'Service',
    price: 35,
    registered: '2024-04-21',
    action: false,
    groupNumber:2
  },
  {
    name: 'Item 7',
    qr: 'Open',
    id: '007',
    availability: 'Service',
    price: 40,
    registered: '2024-04-23',
    action: true,
    groupNumber:2
  },
  {
    name: 'Item 8',
    qr: 'Open',
    id: '008',
    availability: 'Booked',
    price: 45,
    registered: '2024-04-17',
    action: false,
    groupNumber:1
  },
  {
    name: 'Item 9',
    qr: 'Open',
    id: '009',
    availability: 'Available',
    price: 50,
    registered: '2024-04-25',
    action: true,
    groupNumber:3
  },
  {
    name: 'Item 10',
    qr: 'Open',
    id: '010',
    availability: 'Service',
    price: 55,
    registered: '2024-04-24',
    action: false,
    groupNumber:3
  },
  {
    name: 'Item 1',
    qr: 'Open',
    id: '0011',
    availability: 'Available',
    price: 10,
    registered: '2024-04-20',
    action: true,
    groupNumber:2
  },
  {
    name: 'Item 2',
    qr: 'Open',
    id: '0021',
    availability: 'Booked',
    price: 15,
    registered: '2024-04-18',
    action: false,
    groupNumber:1
  },
  {
    name: 'Item 3',
    qr: 'Open',
    id: '0031',
    availability: 'Available',
    price: 20,
    registered: '2024-04-22',
    action: true,
    groupNumber:2
  },
  {
    name: 'Item 4',
    qr: 'Open',
    id: '0041',
    availability: 'Booked',
    price: 25,
    registered: '2024-04-16',
    action: false,
    groupNumber:3
  },
  {
    name: 'Item 5',
    qr: 'Open',
    id: '0051',
    availability: 'Available',
    price: 30,
    registered: '2024-04-19',
    action: true,
    groupNumber:4
  },
  {
    name: 'Item 6',
    qr: 'Open',
    id: '0061',
    availability: 'Service',
    price: 35,
    registered: '2024-04-21',
    action: false,
    groupNumber:1
  },
  {
    name: 'Item 7',
    qr: 'Open',
    id: '0071',
    availability: 'Service',
    price: 40,
    registered: '2024-04-23',
    action: true,
    groupNumber:2
  },
  {
    name: 'Item 8',
    qr: 'Open',
    id: '0081',
    availability: 'Booked',
    price: 45,
    registered: '2024-04-17',
    action: false,
    groupNumber:2
  },
  {
    name: 'Item 9',
    qr: 'Open',
    id: '0091',
    availability: 'Available',
    price: 50,
    registered: '2024-04-25',
    action: true,
    groupNumber:2
  },
  {
    name: 'Item 10',
    qr: 'Open',
    id: '0101',
    availability: 'Service',
    price: 55,
    registered: '2024-04-24',
    action: false,
    groupNumber:3
  },
];

function Table({}: Props) {


//-----------------delete SkeletonLoading temporarily --------------
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 20000);
  }, []);
//-----------------delete SkeletonLoading temporarily --------------
  return (
    <div className={styles.container}>
      <SkeletonLoading isLoading={isLoading} style={{ height: 'calc(100vh - 170px)' }}>
        <table className={styles.table}>
         <tbody>
            <tr className={styles.header}>
              <th></th>
              <th>Equipment name</th>
              <th>QR</th>
              <th>ID</th>
              <th>Availability </th>
              <th>Price</th>
              <th>Registered</th>
              <th>Action</th>
            </tr>
            {inventory.map(item => (
              <TableRow key={item.id} item={item} />
            ))}
         </tbody>
        </table>
      </SkeletonLoading>
    </div>
  );
}

export default Table;
