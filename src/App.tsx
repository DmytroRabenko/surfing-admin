import { useRoutes } from 'react-router-dom';
import { router } from './router';
import MainLayout from './Layout';

const App = () => {
  const routers = useRoutes(router);

  return <MainLayout>{routers}</MainLayout>;
};

export default App;
