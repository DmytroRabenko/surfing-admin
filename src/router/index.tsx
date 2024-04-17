import Calendar from 'src/pages/Calendar';
import Chat from 'src/pages/Chat';
import Inventory from 'src/pages/Inventory';
import Page404 from 'src/pages/NotFound';
import Dashboard from 'src/pages/Dashboard';

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
  {
    path: '*',
    element: <Page404 />,
  },
];
