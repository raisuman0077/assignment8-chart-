import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bubble, Doughnut, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    '2021-07-11',
    '2021-07-12',
    '2021-07-13',
    '2021-07-14',
    '2021-07-15',
    '2021-07-16',
    '2021-07-17',
  ],
  datasets: [
    {
      data: [53, 42, 88, 14, 77, 68, 43],
      backgroundColor: [
        'rgba(54, 65, 132, 0.2)',
        'rgba(255, 65, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(200, 65, 132, 0.2)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function App() {
  return (
    <div
      style={{
        height: '500px',
        width: '900px',
      }}
    >
      <Doughnut data={data} />;
    </div>
  );
}
