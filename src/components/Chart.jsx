import React from 'react';
import { Pie } from 'react-chartjs-2';
import plugin from 'chartjs-plugin-datalabels';
import _ from 'lodash';

const fData = [
  { maintenance: true },
  { maintenance: false },
  { maintenance: true },
  { maintenance: true },
  { maintenance: true },
  { maintenance: true },
  { maintenance: true },
  { maintenance: true },
  { maintenance: false },
  { maintenance: false },
];

const calIsMaintenanceAndIsNotMaintenance = _.countBy(fData, (el) => el.maintenance);

const isMaintenance = calIsMaintenanceAndIsNotMaintenance['false'];
const isNotMaintenance = calIsMaintenanceAndIsNotMaintenance['true'];
console.log(isMaintenance, isNotMaintenance, 'log');

const data = {
  labels: ['Working ', 'Under Maintenance'],
  datasets: [
    {
      data: [isMaintenance, isNotMaintenance],
      backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
      borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255,99,132,1)'],
      borderWidth: 1,
    },
  ],
};

var options = {
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Chart Title',
    },
    datalabels: {
      align: 'end',
      anchor: 'center',
      formatter: (value, ctx) => {
        const datasets = ctx.chart.data.datasets;
        if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
          const sum = datasets[0].data.reduce((a, b) => a + b, 0);
          return Math.round((value / sum) * 100) + '%';
        } else {
          return '0%';
        }
      },

      labels: {
        title: {
          font: {
            size: '14px',
          },
        },
      },
    },
  },
};

const LineChart = () => (
  <div style={{ height: '200px' }}>
    <Pie options={options} data={data} plugins={[plugin]} />
  </div>
);

export default LineChart;
