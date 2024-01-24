
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { Card } from 'primereact/card';

export default function HealthGraph() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const heartRateData = Array.from({ length: 50 }, () => Math.floor(Math.random() * (80 - 60 + 1)) + 60);
    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: Array.from({ length: heartRateData.length }, (_, index) => index + 1),
            datasets: [
                {
                    label: '',
                    data:heartRateData,
                    fill: true,
                    borderColor: documentStyle.getPropertyValue('--cyan-300'),
                    tension: 0.4,
                    backgroundColor: documentStyle.getPropertyValue('--cyan-100')
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 1,
            plugins: {
                legend: {
                   display:false
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        display:false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <Card>
            <Chart type="line" data={chartData} options={chartOptions} />
        </Card>
    )
}
