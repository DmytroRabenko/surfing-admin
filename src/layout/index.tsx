import { ReactNode } from 'react';
import Navbar from 'src/components/navbar';
import '../assets/scss/index.scss'

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className='wrapper'>
      <aside><Navbar/></aside> 
      <main>{children}</main>
    </div>
  );
};
export default MainLayout;
