import Chart from 'react-apexcharts';
import s from './BarChart.module.scss';
import { useState } from 'react';
import { barChartOptions, chartSeries } from 'src/constants/bar-chart-options';



const BarChart = () => {
  // fake sidebar open effect
  const [active, setActive] = useState(true);
  const hoverHandler = () => setActive(!active);
  return (
    <div className={`${s.barChart} content-wrapper`}>
      <div style={{ position: 'absolute', top: 30, right: 40, zIndex: 10 }}>
        <label htmlFor="trigger">
          Trigger menu
          <input id="trigger" onChange={hoverHandler} type="checkbox" />
        </label>
      </div>
      {/* // temp solution */}
      <Chart
        type="bar"
        options={barChartOptions}
        series={chartSeries}
        width={active ? '100%' : 500}
        height={380}
      />
    </div>
  );
};

export default BarChart;
