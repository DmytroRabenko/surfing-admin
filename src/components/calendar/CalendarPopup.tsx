import moment from 'moment';
import { CalendarItemType } from 'src/type/calendar';
interface CalendarPopupProps {
  activeItem: CalendarItemType;
  hoveredItemPosition: { top: number; left: number };
}
const CalendarPopup = ({ activeItem, hoveredItemPosition }: CalendarPopupProps) => {
  return (
    <ul
      className="rct-item__description-block"
      style={{
        position: 'absolute',
        top: hoveredItemPosition.top - 180,
        left: hoveredItemPosition.left - 50, // Відступ праворуч
      }}
    >
      <li>
        <span>Title:</span> {activeItem.title}
      </li>
      <li>
        <span>Start Time:</span> {moment(activeItem.start_time).format('DD.MM.YYYY - HH:mm')}
      </li>
      <li>
        <span>End Time:</span> {moment(activeItem.end_time).format('DD.MM.YYYY - HH:mm')}
      </li>
      {activeItem.description && (
        <li>
          <span>Description:</span> {activeItem.description}
        </li>
      )}
    </ul>
  );
};

export default CalendarPopup;
