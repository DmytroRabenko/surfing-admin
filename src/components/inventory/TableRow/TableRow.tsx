import { useState } from 'react';
import EquipmentInfo from '../EquipmentInfo';
import styles from './TableRow.module.scss';
import CustomPopup from 'src/components/CustomPopup';

export type Item = {
  name: string;
  qr?: string;
  id: string;
  availability: string;
  price: number;
  registered: string;
  action: boolean;
  groupNumber: number;
  description: string;
  material: string;
  type: string;
  unitMeasurement: string;
  length: number;
  width: number;
  thickness: number;
  volume: number;
  tailShape: string;
  noseShape: string;
  rails: string;
  rocker: string;
  rentedAmount: number;
  rentedTime: string;
  rank: number;
  totalRanks: number;
  qrCode: string;
};
type Props = {
  item: Item;
};
type AvailabilityColor = {
  [key: string]: string;
  available: string;
  booked: string;
  service: string;
};
const TableRow = ({ item }: Props) => {
  const { name, id, availability, price, registered, action, groupNumber } = item;
  const availabilityColor: AvailabilityColor = {
    available: 'rgb(130, 186, 94)',
    booked: 'rgb(255, 89, 89)',
    service: 'rgb(175, 182, 186)',
  };
  const [isHidden, setIsHidden] = useState(action);
  const [modalOpen, setModalOpen] = useState(false);
  const handleToggleHide = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setIsHidden(!isHidden);
  };
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <tr onClick={openModal} id={item.id} className={styles.tr}>
        <td>{groupNumber}</td>
        <td className={styles.name}>{name}</td>
        <td>
          <button
            type="button"
            className={styles.btn}
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => e.stopPropagation()}
          >
            Open
          </button>
        </td>
        <td>{id}</td>
        <td style={{ color: availabilityColor[availability.toLowerCase()] }}>{availability}</td>
        <td>{price} EUR</td>
        <td>{registered}</td>
        <td>
          <button onClick={e => handleToggleHide(e)} className={styles.btn} type="button">
            {isHidden ? 'Show' : 'Hide'}
          </button>
        </td>
      </tr>
      <CustomPopup title="View listing" closeModal={closeModal} open={modalOpen}>
        <EquipmentInfo item={item} />
      </CustomPopup>
    </>
  );
};

export default TableRow;
