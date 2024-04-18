import Chart from 'react-apexcharts';
import s from './BarChart.module.scss';
import pageStyle from '../../../pages/Dashboard/Dashboard.module.scss';
import { useRef, useState } from 'react';
import { barChartOptions, chartSeries } from 'src/constants/bar-chart';
import { calculateChartWidth } from 'src/utils/calculate-width';

const combinedClasses = [s.barChart, pageStyle.contentWrapper];

const BarChart = () => {
  const chartRef = useRef(null);
  const [active, setActive] = useState(true);
  const hoverHandler = () => setActive(!active);

  return (
    <div className={combinedClasses.join(' ')}>
      <div style={{ position: 'absolute', top: 30, right: 40, zIndex: 10 }}>
        <label htmlFor="trigger">
          Trigger menu
          <input id="trigger" onChange={hoverHandler} type="checkbox" />
        </label>
      </div>
      {/* // temp solution */}
      <Chart
        ref={chartRef}
        type="bar"
        options={barChartOptions}
        series={chartSeries}
        width={active ? '100%' : calculateChartWidth(chartRef)}
        height={380}
      />
    </div>
  );
};

export default BarChart;
