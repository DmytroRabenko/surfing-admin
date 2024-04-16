import Calendar from 'src/pages/calendar';
import Chat from 'src/pages/chat';
import Inventory from 'src/pages/inventory';
import Page404 from 'src/pages/not-found404';
import Dashboard from 'src/pages/dashboard';

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
