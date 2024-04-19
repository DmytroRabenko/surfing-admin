import Chart from 'react-apexcharts';
import s from './BarChart.module.scss';
import pageStyle from '../../../pages/Dashboard/Dashboard.module.scss';
import { barChartOptions, chartSeries } from 'src/constants/bar-chart';

const combinedClasses = [s.barChart, pageStyle.contentWrapper__rounded].join(' ');

const BarChart = () => {
  return (
    <div className={combinedClasses}>
      <Chart type="bar" options={barChartOptions} series={chartSeries} height={380} />
    </div>
  );
};

export default BarChart;
