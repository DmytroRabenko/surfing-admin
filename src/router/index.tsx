import Calendar from 'src/pages/Calendar';
import Chat from 'src/pages/Chat';
import Inventory from 'src/pages/Inventory';
import Page404 from 'src/pages/NotFound';
import Dashboard from 'src/pages/Dashboard';
import EquipmentInfo from 'src/pages/Inventory/EquipmentInfo';

export const router = [
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/calendar',
    element: <Calendar />,
  },
  {
    path: '/inventory',
    element: <Inventory />,
  },
  {
    path: '/chat',
    element: <Chat />,
  },
  // {
  //   path: '/inventory/info',
  //   element: <EquipmentInfo />,
  // },
  {
    path: '*',
    element: <Page404 />,
  },
];
