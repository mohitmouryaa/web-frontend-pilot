import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { Card } from 'primereact/card';
export default function AnaylistChart() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ['0 W', '4 W', '8 W', '12 W'],
      datasets: [
        {
          label: '',
          backgroundColor: documentStyle.getPropertyValue('--cyan-200'),
          borderColor: documentStyle.getPropertyValue('--cyan-200'),
          borderWidth: 1,
          barThickness: 60,
          borderRadius: 10,
          data: [10, 20, 30],
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
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'index',
        intersect: false,
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <Card>
      <h2 className="m-1">Analytics</h2>
      <Chart type="bar" data={chartData} options={chartOptions} />
    </Card>
  );
}
