import { Outlet } from 'react-router-dom';
import Navbar from 'src/components/navbar/navbar';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
