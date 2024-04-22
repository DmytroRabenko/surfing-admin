import { useState, ChangeEvent } from 'react';
import { default as SearchIcon } from 'src/assets/icons/calendar-search.svg?react';
import { default as CloseIcon } from 'src/assets/icons/calendar-close.svg?react';
import s from './CalendarSearch.module.scss';
const CalendarSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    // Тут ви можете виконати певну дію при введенні запиту, наприклад, фільтрацію подій за введеним значенням
    console.log('Введений запит:', value);
  };
  return (
    <div className={s.calendarSearch}>
      <form className={s.form}>
        <span className={`${s.icon} ${searchQuery.length > 0 && s.close}`}>
          {searchQuery.length > 0 ? (
            <CloseIcon onClick={() => setSearchQuery('')} />
          ) : (
            <SearchIcon />
          )}
        </span>

        <input
          placeholder="Search listings"
          value={searchQuery}
          onChange={handleSearchInputChange}
          className={s.searchInput}
        />
      </form>
    </div>
  );
};

export default CalendarSearch;
