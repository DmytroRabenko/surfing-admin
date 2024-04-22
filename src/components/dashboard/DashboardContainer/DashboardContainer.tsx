import { ReactNode } from 'react';
import s from './DashboardContainer.module.scss';

type DashboardContainerProps = {
  children: ReactNode;
};

const DashboardContainer = ({ children }: DashboardContainerProps) => {
  return <div className={s.dashboardContainer}>{children}</div>;
};

export default DashboardContainer;
