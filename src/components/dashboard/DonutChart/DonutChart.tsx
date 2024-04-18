import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';
import s from './DonutChart.module.scss';

const donutColors = {
  series1: '#fdd835',
  series2: '#00d4bd',
  series3: '#826bf8',
  series4: '#1FD5EB',
  series5: '#ffa1a1',
};

const options: ApexOptions = {
  chart: {
    id: 'basic-donut',
  },
  stroke: { width: 0 },
  labels: ['Operational', 'Networking', 'Hiring', 'R&D'],
  colors: [donutColors.series1, donutColors.series5, donutColors.series3, donutColors.series2],
  dataLabels: {
    enabled: true,
    formatter: (val: string) => `${parseInt(val, 10)}%`,
  },
  legend: {
    position: 'bottom',
    markers: { offsetX: -3 },
    labels: { colors: 'blue' },
    itemMargin: {
      vertical: 3,
      horizontal: 10,
    },
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            fontSize: '1.2rem',
          },
          value: {
            fontSize: '1.2rem',
            color: 'red',
            formatter: (val: string) => `${parseInt(val, 10)}`,
          },
          total: {
            show: true,
            fontSize: '1.2rem',
            label: 'Operational',
            formatter: () => '31%',
            color: 'blue',
          },
        },
      },
    },
  },
};

const DonutChart = () => {
  return (
    <div className={`${s.donutChart} content-wrapper`}>
      <Chart type="donut" options={options} series={[85, 16, 50, 50]} height={380} />
    </div>
  );
};

export default DonutChart;

//  responsive: [
//     {
//       breakpoint: 992,
//       options: {
//         chart: {
//           height: 380,
//         },
//         legend: {
//           position: 'bottom',
//         },
//       },
//     },
//     {
//       breakpoint: 576,
//       options: {
//         chart: {
//           height: 320,
//         },
//         plotOptions: {
//           pie: {
//             donut: {
//               labels: {
//                 show: true,
//                 name: {
//                   fontSize: '',
//                 },
//                 value: {
//                   fontSize: '',
//                 },
//                 total: {
//                   fontSize: '',
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   ],
