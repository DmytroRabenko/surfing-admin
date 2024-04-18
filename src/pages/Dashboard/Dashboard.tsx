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
        {/* <div className={s.diagramWrapper}>
          <div style={{ background: 'blue', flex: 1 }}>1</div>
          <div style={{ background: 'red', flex: 2 }}>1</div>
        </div> */}
        <div className={s.diagramWrapper}>
          <BarChart />
          <DonutChart />
        </div>
        <RentalTable />
      </DashboardContainer>
    </>
  );
};
export default Dashboard;
