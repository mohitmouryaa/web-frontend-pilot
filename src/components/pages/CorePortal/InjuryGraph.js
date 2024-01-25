import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { Card } from 'primereact/card';
export default function InjuryGraph() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary',
    );
    const data = {
      labels: [
        '0 W',
        '4 W',
        '8 W',
        '12 W',
        '16 W',
        '20 W',
        '24 W',
        '28 W',
        '32 W',
      ],
      datasets: [
        {
          label: '',
          backgroundColor: documentStyle.getPropertyValue('--cyan-300'),
          borderColor: documentStyle.getPropertyValue('--cyan-300'),
          borderWidth: 1,
          barThickness: 30,
          borderRadius: 10,
          data: [10, 20, 30, 40, 50, 60, 70, 80, 90],
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
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            display: false,
          },
        },
        y: {
          display: false,
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <Card>
      <div className="mb-4">
        <div className="flex justify-content-between align-items-center">
          <h2 className="m-1">3rd Trimester</h2>
          <i className="pi pi-calendar  text-2xl mt-1"></i>
        </div>
        <div className=""> 28 weeks, 4 days pregnant</div>
      </div>
      <Chart type="bar" data={chartData} options={chartOptions} />
    </Card>
  );
}
