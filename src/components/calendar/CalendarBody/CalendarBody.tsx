import Timeline, { TodayMarker } from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
import CalendarSearch from '../CalendarSearch/CalendarSearch';
import './CalendarBody.scss';

const CalendarGrid = () => {
  const data = {
    groups : [
      { id: 1, title: 'Surf 1' },
      { id: 2, title: 'Surf 2' },
      { id: 3, title: 'Surf 3' },
      { id: 4, title: 'Surf 4' },
      { id: 5, title: 'Surf 5' },
      { id: 6, title: 'Surf 6' },
      { id: 7, title: 'Surf 7' },
      { id: 8, title: 'Surf 8' },
      { id: 9, title: 'Surf 9' },
      { id: 10, title: 'Surf 10' },
      { id: 11, title: 'Surf 11' },
      { id: 12, title: 'Surf 12' },
    ],
    items : [
      {
        id: 1,
        group: 1,
        title: 'item 1',
        start_time: moment(),
        end_time: moment().add(3, 'hour'),
        itemProps: {
          // ці додаткові атрибути передаються до корінь <div /> кожного елемента як <div {...itemProps} />
          'data-custom-attribute': 'Випадковий вміст',
          'aria-hidden': true,
          onDoubleClick: () => {
            console.log('Ви клацнули двічі!');
          },
          className: 'weekend',
          style: {},
        },
      },
      {
        id: 2,
        group: 2,
        title: 'item 2',
        start_time: moment().add(5, 'hour'),
        end_time: moment().add(10, 'hour'),
      },
      {
        id: 3,
        group: 1,
        title: 'item 3',
        start_time: moment().add(-24, 'hour'),
        end_time: moment().add(-20, 'hour'),
      },
      {
        id: 4,
        group: 1,
        title: 'item 1',
        start_time: moment(-4, 'hour'),
        end_time: moment().add(-2, 'hour'),
      },
      {
        id: 5,
        group: 4,
        title: 'item 1',
        start_time: moment(),
        end_time: moment().add(3, 'hour'),
      },
      {
        id: 6,
        group: 4,
        title: 'item 2',
        start_time: moment().add(5, 'hour'),
        end_time: moment().add(10, 'hour'),
      },
      {
        id: 7,
        group: 4,
        title: 'item 3',
        start_time: moment().add(-24, 'hour'),
        end_time: moment().add(-20, 'hour'),
      },
      {
        id: 8,
        group: 5,
        title: 'item 2',
        start_time: moment().add(-0.5, 'hour'),
        end_time: moment().add(0.5, 'hour'),
      },
      {
        id: 9,
        group: 7,
        title: 'item 3',
        start_time: moment().add(2, 'hour'),
        end_time: moment().add(24, 'hour'),
      },
      {
        id: 10,
        group: 6,
        title: 'item 1',
        start_time: moment(),
        end_time: moment().add(8, 'hour'),
      },
      {
        id: 11,
        group: 8,
        title: 'item 2',
        start_time: moment().add(-5, 'hour'),
        end_time: moment().add(5, 'hour'),
      },
      {
        id: 12,
        group: 10,
        title: 'item 3',
        start_time: moment().add(1, 'hour'),
        end_time: moment().add(12, 'hour'),
      },
    ],
  };

  return (
    <div className="calendarBody">
      <div className="calendarSearch">
        <CalendarSearch />
      </div>

      <Timeline
        groups={data.groups}
        items={data.items}
        defaultTimeStart={moment().add(-12, 'hour')}
        defaultTimeEnd={moment().add(24, 'hour')}
        sidebarWidth={330}
        lineHeight={56}
      >
        <TodayMarker date={moment().toDate()} />
      </Timeline>
    </div>
  );
};

export default CalendarGrid;
