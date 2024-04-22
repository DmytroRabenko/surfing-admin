import Chart from 'react-apexcharts';
import s from './DonutChart.module.scss';
import pageStyle from '../../../pages/Dashboard/Dashboard.module.scss';
import { donutChartOptions, donutData } from 'src/constants/donut-chart';

const combinedClasses = [pageStyle.contentWrapper__rounded, s.donutChart].join(' ');

interface ChartHeaderProps {
  title: string;
  subtitle: string;
}

const ChartHeader = ({ title, subtitle }: ChartHeaderProps) => {
  return (
    <div className={s.chartHeader}>
      <h2 className={s.chartHeader__title}>{title}</h2>
      <p className={s.chartHeader__subtitle}>{subtitle}</p>
    </div>
  );
};

const DonutChart = () => {
  return (
    <div className={combinedClasses}>
      <ChartHeader title="Customers" subtitle="New customers rental" />
      <Chart
        type="donut"
        options={donutChartOptions}
        series={donutData}
        height={300}
        // width={300}
      />
    </div>
  );
};

export default DonutChart;
