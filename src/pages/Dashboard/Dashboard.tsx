import DashboardContainer from 'src/components/dashboard/DashboardContainer';
import DashboardHeader from 'src/components/dashboard/DashboardHeader';
import LinearDiagram from 'src/components/dashboard/LinearDiagram';
import RadialDiagram from 'src/components/dashboard/RadialDiagram';
import RentalTable from 'src/components/dashboard/RentalTable';

import s from './Dashboard.module.scss';
import  Statistic  from 'src/components/dashboard/Statistic';

const Dashboard = () => {
  return (
    <>
      <DashboardContainer>
        <DashboardHeader />
        <Statistic />
        <div className={s.diagramWrapper}>
          <LinearDiagram />
          <RadialDiagram />
        </div>
        <RentalTable />
      </DashboardContainer>
    </>
  );
};
export default Dashboard;
