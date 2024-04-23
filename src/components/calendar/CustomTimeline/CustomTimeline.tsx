import { useState } from 'react';
import moment from 'moment';
import Timeline, { TodayMarker } from 'react-calendar-timeline';

import generateFakeData from './generate-fake-data';

const keys = {
  groupIdKey: 'id',
  groupTitleKey: 'title',
  groupRightTitleKey: 'rightTitle',
  itemIdKey: 'id',
  itemTitleKey: 'title',
  itemDivTitleKey: 'title',
  itemGroupKey: 'group',
  itemTimeStartKey: 'start',
  itemTimeEndKey: 'end',
  groupLabelKey: 'title',
};

const App = () => {
  const { groups, items } = generateFakeData();
  const defaultTimeStart = moment().startOf('day').toDate();
  const defaultTimeEnd = moment().startOf('day').add(1, 'day').toDate();

  const [state, setState] = useState({
    groups,
    items,
    defaultTimeStart,
    defaultTimeEnd,
  });

  const handleItemMove = (itemId: string, dragTime: number, newGroupOrder: number) => {
    const { items, groups } = state;
    const group = groups[newGroupOrder];

    setState({
      ...state,
      items: items.map(item =>
        item.id === itemId
          ? {
              ...item,
              start: dragTime,
              end: dragTime + (item.end - item.start),
              group: group.id,
            }
          : item
      ),
    });

    console.log('Moved', itemId, dragTime, newGroupOrder);
  };

  const handleItemResize = (itemId: string, time: number, edge: string) => {
    const { items } = state;

    setState({
      ...state,
      items: items.map(item =>
        item.id === itemId
          ? {
              ...item,
              start: edge === 'left' ? time : item.start,
              end: edge === 'left' ? item.end : time,
            }
          : item
      ),
    });

    console.log('Resized', itemId, time, edge);
  };

  return (
    <Timeline
      groups={state.groups}
      items={state.items}
      keys={keys}
      itemTouchSendsClick={false}
      stackItems={false}
      itemHeightRatio={0.75}
      canMove={true}
      canResize={'both'}
      defaultTimeStart={state.defaultTimeStart}
      defaultTimeEnd={state.defaultTimeEnd}
      onItemMove={handleItemMove}
      onItemResize={handleItemResize}
      sidebarWidth={330}
      lineHeight={56}
    >
      <TodayMarker date={moment().toDate()} />
    </Timeline>
  );
};

export default App;
