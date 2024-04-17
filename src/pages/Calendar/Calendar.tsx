import { useState } from 'react';
import { Scheduler } from '@bitnoi.se/react-scheduler';

import '@bitnoi.se/react-scheduler/dist/style.css';
import s from './Calendar.module.scss';

import mockedSchedulerData from './mock-data'

const Calendar = () => {
  const [filterButtonState, setFilterButtonState] = useState(0);

  return (
    <>
      <div className={s.calendar}>
        <div className={s.calendar__content}>
          <Scheduler
            data={mockedSchedulerData}
            onRangeChange={newRange => console.log(newRange)}
            onTileClick={clickedResource => console.log(clickedResource)}
            onItemClick={item => console.log(item)}
            onFilterData={() => {
              setFilterButtonState(1);
            }}
            onClearFilterData={() => {
              setFilterButtonState(0);
            }}
            config={{
              zoom: 0,
              filterButtonState,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Calendar;
