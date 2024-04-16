import { ReactNode } from 'react';
import Navbar from 'src/components/navbar/navbar';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <aside><Navbar/></aside> 
      <main>{children}</main>
    </div>
  );
};
export default MainLayout;
