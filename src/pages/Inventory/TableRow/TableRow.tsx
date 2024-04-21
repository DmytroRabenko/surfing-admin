import styles from './TableRow.module.scss';

type Item = {
  name: string;
  qr?: string;
  id: string;
  availability: string;
  price: number;
  registered: string;
  action: boolean;
  groupNumber: number;
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
function TableRow({ item }: Props) {
  const { name, qr, id, availability, price, registered, action, groupNumber } = item;
  const availabilityColor: AvailabilityColor = {
    available: 'rgb(130, 186, 94)',
    booked: 'rgb(255, 89, 89)',
    service: 'rgb(175, 182, 186)',
  };
  return (
    <tr className={styles.tr}>
      <td>{groupNumber}</td>
      <td className={styles.name}>{name}</td>
      <td>
        <button className={styles.btn} type="button">
          {qr}
        </button>
      </td>
      <td>{id}</td>
      <td style={{ color: availabilityColor[availability.toLowerCase()] }}>{availability}</td>
      <td>{price} EUR</td>
      <td>{registered}</td>
      <td>
        <button className={styles.btn} type="button">
          {action ? 'Hide' : 'Show'}
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
