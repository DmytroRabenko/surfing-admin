import { ReactNode } from 'react';
import Navbar from 'src/components/Navbar';

import '../assets/scss/index.scss';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className='wrapper'>
      <Navbar/>
      <main>{children}</main>
    </div>
  );
};
export default MainLayout;
