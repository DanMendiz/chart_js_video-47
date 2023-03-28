import Chart from 'chart.js/auto';
import * as Utils from './utils.js';

const DATA_COUNT = 5;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

const data = {
  labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
  datasets: [
    {
      label: 'Dataset 1',
      data: Utils.numbers(NUMBER_CFG),
      backgroundColor: Object.values(Utils.CHART_COLORS),
    },
  ],
};

// const config = {
//   type: 'pie',
//   data: data,
//   options: {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Chart.js Pie Chart',
//       },
//     },
//   },
// };

// const config = {
//   type: 'doughnut',
//   data: data,
//   options: {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Chart.js Doughnut Chart'
//       }
//     }
//   },
// };

const config = {
  type: 'polarArea',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Polar Area Chart',
      },
    },
  },
};

new Chart(document.getElementById('myChart'), config);
