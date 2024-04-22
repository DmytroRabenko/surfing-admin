import Chart from 'react-apexcharts';
import s from './BarChart.module.scss';
import pageStyle from '../../../pages/Dashboard/Dashboard.module.scss';
import { barChartOptions, chartSeries } from 'src/constants/bar-chart';
import DropdownMenu from '../DropDawnMenu';
import { dropDownOptions } from '../RentalHead/RentalHead';
import { useState } from 'react';

const combinedClasses = [s.barChart, pageStyle.contentWrapper__rounded].join(' ');

const BarChart = () => {
  const [rerender, setRerender] = useState('');
  return (
    <div className={combinedClasses}>
      <div className={s.absoluteWrapper}>
        <DropdownMenu
          onHandleChange={option => {
            setRerender(option);
          }}
          options={dropDownOptions}
        />
      </div>
      <Chart
        key={rerender}
        type="bar"
        options={barChartOptions}
        series={chartSeries}
        height={380}
      />
    </div>
  );
};

export default BarChart;
