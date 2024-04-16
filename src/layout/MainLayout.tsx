import { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <aside></aside> 
      <main>{children}</main>
    </div>
  );
};
export default MainLayout;
