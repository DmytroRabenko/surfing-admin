import DashboardContainer from 'src/components/dashboard/DashboardContainer';
import DashboardHeader from 'src/components/dashboard/DashboardHeader';
import BarChart from 'src/components/dashboard/BarChart';
import DonutChart from 'src/components/dashboard/DonutChart';
import RentalTable from 'src/components/dashboard/RentalTable';

import s from './Dashboard.module.scss';
import Statistic from 'src/components/dashboard/Statistic';

const Dashboard = () => {
  return (
    <>
      <DashboardContainer>
        <DashboardHeader />
        <Statistic />
        <div className={s.chartsWrapper}>
          <BarChart />
          <DonutChart />
        </div>
        <RentalTable />
      </DashboardContainer>
    </>
  );
};
export default Dashboard;
