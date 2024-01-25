import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { Card } from 'primereact/card';

export default function HealthReports() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [injuryData, setInjuryData] = useState({});

    useEffect(() => {
        
        const stepsData = [null, null, null, 30];
        const documentStyle = getComputedStyle(document.documentElement);
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: [10, 20, 30, 40, 50],
            datasets: [
                {
                    label: '',
                    tension: 0.4,
                    data: [10, 20, 5, 26, 5],
                    borderColor: documentStyle.getPropertyValue('--cyan-300'),
                    backgroundColor: documentStyle.getPropertyValue('--cyan-100'),
                },
            ]
        };
        const injuryDataList = {
            labels: ["01", "02", "03", "04", "05", "05", "06", "07", "08", "09", "10"],
            datasets: [
                {
                    label: '',
                    tension: 0.4,
                    data: [10, 20, 5, 26, 5, 7, 9, 6, 3, 7, 9],
                    borderColor: documentStyle.getPropertyValue('--cyan-300'),
                    backgroundColor: documentStyle.getPropertyValue('--cyan-100'),
                },
                {
                    type: 'bar',
                    label: 'Steps',
                    borderWidth: 1,
                    data: stepsData,
                    borderRadius: 10,
                    barThickness: 30,
                    borderColor: documentStyle.getPropertyValue('--cyan-300'),
                    backgroundColor: documentStyle.getPropertyValue('--cyan-300'),
                },
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 2,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    fontSize: 20,
                    display: true,
                    position: 'top',
                    text: 'Injury Analysis',
                },

            },
            scales: {
                x: {

                    grid: {
                        display: false,
                        color: surfaceBorder,
                    }
                },
                y: {
                    grid: {
                        display: false,
                        color: surfaceBorder,
                    }
                }
            }
        };
        setChartData(data);
        setChartOptions(options);
        setInjuryData(injuryDataList)
    }, []);

    return (
        <Card>
            <Chart type="line" data={injuryData} options={chartOptions} className='mb-6' />
            <div className='flex'>
                <Chart type="line" data={chartData} options={chartOptions} className='flex-1' />
                <Chart type="line" data={chartData} options={chartOptions} className='flex-1' />
            </div>

        </Card>
    )
}
