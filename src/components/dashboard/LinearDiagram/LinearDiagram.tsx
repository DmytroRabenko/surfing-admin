import Chart from 'react-apexcharts';

const linearChartOptions = {
  chart: {
    id: 'basic-bar',
    height: 300,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: { position: 'none' },
    },
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    position: 'bottom',
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  tooltip: {
    followCursor: true,
    theme: 'dark',
    // any from APEX CHART SPEC
    custom: function ({ series, seriesIndex, dataPointIndex }: any) {
      return (
        '<div class="arrow_box">' +
        '<span>' +
        '🡭' +
        '  ' +
        series[seriesIndex][dataPointIndex] +
        '%' +
        '</span>' +
        '</div>'
      );
    },
  },
  dataLabels: { enabled: false },
  colors: ['#EFF4FF'],
  grid: {
    show: false,
  },
  states: {
    hover: {
      filter: {
        type: 'none',
      },
    },
  },
};
const chartValues = [
  {
    name: 'series-1',
    data: [30, 40, 45, 25, 35, 45, 80, 75, 55, 65, 30, 40],
  },
];

const LinearDiagram = () => {
  return (
    <div style={{ position: 'relative' }} className="rounded-content-wrapper">
      {/* // temp solution */}
      <div style={{ position: 'absolute', top: 30, left: 40 }}>
        <h2>Overview</h2>
        <p>Monthly Earning</p>
      </div>
      <div style={{ position: 'absolute', top: 30, right: 40, zIndex: 10 }}>
        <select name="select-options">
          <option value="quarterly">Quarterly</option>
          <option value="otherOption">Other option</option>
          <option value="otherOption">Other option</option>
        </select>
      </div>
      {/* // temp solution */}
      <Chart type="bar" options={linearChartOptions} series={chartValues} width="600" />
    </div>
  );
};

export default LinearDiagram;
