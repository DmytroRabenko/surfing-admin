import Chart from 'react-apexcharts';
import s from './DonutChart.module.scss';
import pageStyle from '../../../pages/Dashboard/Dashboard.module.scss';
import { donutChartOptions, donutData } from 'src/constants/donut-chart';

const combinedClasses = [pageStyle.contentWrapper, s.donutChart];

const ChartHeader = () => {
  return (
    <div className={s.chartHeader}>
      <h2 className={s.chartHeader__title}>Customers</h2>
      <p className={s.chartHeader__subtitle}>New customers rental</p>
    </div>
  );
};

const DonutChart = () => {
  return (
    <div className={combinedClasses.join(' ')}>
      <ChartHeader />
      <Chart type="donut" options={donutChartOptions} series={donutData} />
    </div>
  );
};

export default DonutChart;
