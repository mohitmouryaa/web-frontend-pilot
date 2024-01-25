import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { Card } from 'primereact/card';

export default function Paitent() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    const data = {
      labels: ['HM', 'HH', 'TV', 'EI', 'E2'],
      datasets: [
        {
          label: '',
          tension: 0.4,
          data: [10, 20, 5, 26, 5],
          borderColor: documentStyle.getPropertyValue('--cyan-300'),
          backgroundColor: documentStyle.getPropertyValue('--cyan-100'),
        },
        {
          label: '',
          tension: 0.4,
          data: [15, 7, 31, 6, 9],
          // borderColor: documentStyle.getPropertyValue('--cyan-300'),
          // backgroundColor: documentStyle.getPropertyValue('--cyan-100'),
        },
        {
          label: '',
          tension: 0.4,
          data: [20, 9, 11, 21, 3],
          borderColor: documentStyle.getPropertyValue('--red-400'),
          backgroundColor: documentStyle.getPropertyValue('--red-400'),
        },
      ],
    };

    const options = {
      maintainAspectRatio: false,
      aspectRatio: 1,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          fontSize: 20,
          display: true,
          position: 'top',
          text: 'Patient',
        },
      },
      scales: {
        x: {
          grid: {
            display: true,
            color: surfaceBorder,
          },
        },
        y: {
          grid: {
            display: true,
            color: surfaceBorder,
          },
        },
      },
    };
    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <Card>
      <div className="">
        <Chart type="line" data={chartData} options={chartOptions} />
      </div>
    </Card>
  );
}
