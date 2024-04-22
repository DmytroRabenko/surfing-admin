import { ReactNode } from 'react';
import Navbar from 'src/components/navbar';
import { MenuProvider } from './MenuContext';
import '../assets/scss/index.scss';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <MenuProvider>
      <div className="wrapper">
        <Navbar />
        <main>{children}</main>
      </div>
    </MenuProvider>
  );
};
export default MainLayout;
