import {Moment} from 'moment';
import DropdownList from 'src/components/UI/DropDownList';
import { default as Chevron } from 'src/assets/icons/calendar-chevron.svg?react';
import { default as Location } from 'src/assets/icons/location.svg?react';
import { default as Tags } from 'src/assets/icons/tags.svg?react';
import { default as Sort } from 'src/assets/icons/calendar-sort.svg?react';


import s from './CalendarHeader.module.scss';
interface DataType {
  name: string;
  id: number;
}
interface CalendarHeaderProps {
  currentDate: Moment;
  handlePrevDate: () => void;
  handleNextDate: () => void;
  handleCurrentDate: () => void;
  handleAreaValue: (id: number) => void;
  handleTagsValue: (id: number) => void;
  handleSortValue: (id: number) => void;
}

const areasList: DataType[] = [
  { name: 'All areas', id: 1 },
  { name: 'Area 1', id: 2 },
  { name: 'Area 2', id: 3 },
  { name: 'Area 3', id: 4 },
  { name: 'Area 4', id: 5 },
  { name: 'Area 5', id: 6 },
  { name: 'Area 6', id: 7 },
  { name: 'Area 7', id: 8 },
];
const tagsList: DataType[] = [
  { name: 'All tags', id: 1 },
  { name: 'Tag 1', id: 2 },
  { name: 'Tag 2', id: 3 },
  { name: 'Tag 3', id: 4 },
  { name: 'Tag 4', id: 5 },
  { name: 'Tag 5', id: 6 },
];
const sortList: DataType[] = [
  { name: 'Rating', id: 2 },
  { name: 'Price', id: 3 },
  { name: 'Date', id: 4 },
];

const CalendarHeader = ({
  currentDate,
  handlePrevDate,
  handleNextDate,
  handleCurrentDate,
  handleAreaValue,
  handleTagsValue,
  handleSortValue,
}: CalendarHeaderProps) => {
  const currentDateValue = currentDate.format('MMM D, YYYY');
  return (
    <div className={s.calendarHeader}>
      <div className={s.calendarHeader__filters}>
        <DropdownList defaultText="All areas" data={areasList} action={handleAreaValue}>
          <Location />
        </DropdownList>
        <DropdownList defaultText="All areas" data={tagsList} action={handleTagsValue}>
          <Tags />
        </DropdownList>
        <div className={s.sortContainer}>
          <DropdownList defaultText="Listed" data={sortList} action={handleSortValue}>
            <Sort />
          </DropdownList>
        </div>
      </div>
      <div className={s.calendarHeader__buttons}>
        <button className={s.prevDate} onClick={handlePrevDate}>
          <Chevron />
        </button>
        <div className={s.activeDate}>{currentDateValue}</div>
        <button className={s.nextDate} onClick={handleNextDate}>
          <Chevron />
        </button>
        <button onClick={handleCurrentDate} className={s.today}>
          Today
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;
