import { useState } from 'react';
import moment, { Moment } from 'moment';
import Timeline, {
  TodayMarker,
  TimelineHeaders,
  SidebarHeader,
  DateHeader,
} from 'react-calendar-timeline';
// @ts-expect-error Missing declaration file for resize-detector/container
import containerResizeDetector from 'react-calendar-timeline/lib/resize-detector/container';

import CalendarSearch from '../CalendarSearch/CalendarSearch';
import CalendarPopup from '../CalendarPopup';

import calendarData from '../calendarData';
import { CalendarItemType } from 'src/type/calendar';
import 'react-calendar-timeline/lib/Timeline.css';
import './CalendarBody.scss';

interface CalendarBodyProps {
  visibleTimeStart: Moment;
  visibleTimeEnd: Moment;
  handleTimeChange: (visibleTimeStart: number, visibleTimeEnd: number) => void;
}

interface timelineContext {
  timelineWidth: number;
  visibleTimeStart: number;
  visibleTimeEnd: number;
  canvasTimeStart: number;
  canvasTimeEnd: number;
}

const CalendarBody = ({
  visibleTimeStart,
  visibleTimeEnd,
  handleTimeChange,
}: CalendarBodyProps) => {
  // const [showItemDescription, setShowItemDescription] = useState(false);
  const data = calendarData;
  const [labelFormat, setLabelFormat] = useState('HH');
  const [timeSteps, setTimeSteps] = useState({
    second: 1,
    minute: 1,
    hour: 1,
    day: 1,
    month: 1,
    year: 1,
  });
  const [activeItem, setActiveItem] = useState<CalendarItemType | null>(null);
  const [hoveredItemPosition, setHoveredItemPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  // Перевірка, чи різниця між start_time та end_time кожного елемента більше 3 годин
  const shouldApplyClipPath = (item: CalendarItemType) => {
    const startTime = moment(item.start_time);
    const endTime = moment(item.end_time);
    const diffHours = endTime.diff(startTime, 'hours');
    return diffHours > 4;
  };

  const handleZoom = (timelineContext: timelineContext, unit: string) => {
    const { canvasTimeStart, canvasTimeEnd, timelineWidth } = timelineContext;
    const zoomIndex = (canvasTimeEnd - canvasTimeStart) / 10000000;

    if (zoomIndex <= 35 && unit === "hour") {
      setTimeSteps({
        second: 1,
        minute: 1,
        hour: 1,
        day: 1,
        month: 1,
        year: 1,
      });
      setLabelFormat('HH');
    } else if (zoomIndex > 35 && zoomIndex <= 62 && unit === "hour") {
      setTimeSteps({
        second: 1,
        minute: 1,
        hour: 2,
        day: 1,
        month: 1,
        year: 1,
      });
      setLabelFormat('HH');
    } else {
      if (timelineWidth > 1500) {
        setLabelFormat('dd D');
      } else {
        setLabelFormat('dddd D');
      }
    }

    console.log(timelineWidth);
  };

  return (
    <div className="calendarBody">
      <Timeline
        groups={data.groups}
        items={data.items}
        resizeDetector={containerResizeDetector}
        visibleTimeStart={visibleTimeStart.valueOf()}
        visibleTimeEnd={visibleTimeEnd.valueOf()}
        sidebarWidth={330} //ширина лівого меню
        lineHeight={56} //висота строки
        itemHeightRatio={0.9} //висота заброньованого планки
        minZoom={1000 * 60 * 60 * 24}
        maxZoom={1000 * 60 * 60 * 24 * 7}
        canMove={false} //можливість перетягування
        canResize={false} //можливість розтягувати
        itemTouchSendsClick
        traditionalZoom
        //onItemSelect={handleItemSelect}
        onTimeChange={handleTimeChange}
        onZoom={handleZoom}
        timeSteps={timeSteps}
        itemRenderer={({ item, itemContext, getItemProps }) => {
          const { ...restProps } = getItemProps({});
          const currentItem = data.items.find(el => el.id === item.id);
          if (!currentItem) {
            // Якщо елемент не знайдено, поверніть null або відповідну обробку помилок.
            return null; // або обробіть цю ситуацію якимось іншим способом
          }
          const clipPathCondition = shouldApplyClipPath(currentItem);

          // Додаємо клас, якщо умова виконується
          const itemClassName = clipPathCondition ? 'rct-item-clipped' : '';
          return (
            <div
              {...restProps}
              className={`rct-item ${itemClassName}`}
              data-info={`title: ${currentItem?.title}, id: ${currentItem?.id}`}
              onMouseEnter={event => {
                setActiveItem(item);
                setHoveredItemPosition({
                  top: event.clientY,
                  left: event.clientX,
                });
              }}
              onMouseLeave={() => setActiveItem(null)}
            >
              <div className="rct-item-content">{itemContext.title}</div>
            </div>
          );
        }}
      >
        <TodayMarker date={moment().toDate()} interval={600000} />
        <TimelineHeaders>
          <SidebarHeader>
            {({ getRootProps }) => {
              return (
                <div className="calendarBody__calendarSearch" {...getRootProps()}>
                  <CalendarSearch />
                </div>
              );
            }}
          </SidebarHeader>
          <DateHeader unit="primaryHeader" />
          <DateHeader labelFormat={labelFormat} />
          {/* <DateHeader /> */}
        </TimelineHeaders>
      </Timeline>
      {activeItem && (
        <CalendarPopup activeItem={activeItem} hoveredItemPosition={hoveredItemPosition} />
      )}
    </div>
  );
};

export default CalendarBody;
