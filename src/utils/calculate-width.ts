export const calculateChartWidth = ref => {
  const chartWidth = ref.current.chart.el.clientWidth;
  return chartWidth - (29 / 100) * chartWidth;
};
