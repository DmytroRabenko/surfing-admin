import { useState } from 'react';
import moment from 'moment';
import CalendarHeader from 'src/components/calendar/CalendarHeader/CalendarHeader';
import s from './Calendar.module.scss';
import CalendarBody from 'src/components/calendar/CalendarBody/CalendarBody';

const Calendar = () => {
  const formattedActiveDate = moment().format('MMM D, YYYY');
  const [activeDate, setActiveDate] = useState(formattedActiveDate);
  const [areaValue, setAreaValue] = useState<number | null>(null);
  const [tagsValue, setTagsValue] = useState<number | null>(null);
  const [sortValue, setSortValue] = useState<number | null>(null);
  console.log(`area: ${areaValue}, tags: ${tagsValue}, sort: ${sortValue}`);

  // Функції для фільтрації та сортування
  const handlePrevDate = () => {
    setActiveDate(prevDate => moment(prevDate).subtract(1, 'day').format('MMM D, YYYY'));
  };
  const handleNextDate = () => {
    setActiveDate(prevDate => moment(prevDate).add(1, 'day').format('MMM D, YYYY'));
  };
  const handleCurrentDate = () => {
    setActiveDate(moment().format('MMM D, YYYY'));
  };
  const handleAreaValue = (id: number) => {
    setAreaValue(id);
  };
  const handleTagsValue = (id: number) => {
    setTagsValue(id);
  };
  const handleSortValue = (id: number) => {
    setSortValue(id);
  };

  return (
    <div className={s.calendar}>
      <CalendarHeader
        activeDate={activeDate}
        handlePrevDate={handlePrevDate}
        handleNextDate={handleNextDate}
        handleCurrentDate={handleCurrentDate}
        handleAreaValue={handleAreaValue}
        handleTagsValue={handleTagsValue}
        handleSortValue={handleSortValue}
      />
      <CalendarBody />
    </div>
  );
};

export default Calendar;
