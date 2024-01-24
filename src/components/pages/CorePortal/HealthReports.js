
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { Card } from 'primereact/card';

export default function HealthReports() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [injuryData, setInjuryData] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const stepsData = [null,null,null,30];
        const data = {
            labels:[10,20,30,40,50] ,
            datasets: [
                {
                    label: '',
                    borderColor: documentStyle.getPropertyValue('--cyan-300'),
                    tension: 0.4,
                    backgroundColor: documentStyle.getPropertyValue('--cyan-100'),
                    data: [10,20,5,26,5]
                },
              ]
        };
        const injuryDataList = {
            labels: ["01","02","03","04","05","05","06","07","08","09","10"],
            datasets: [
                {
                    label: '',
                    borderColor: documentStyle.getPropertyValue('--cyan-300'),
                    tension: 0.4,
                    backgroundColor: documentStyle.getPropertyValue('--cyan-100'),
                    data: [10,20,5,26,5,7,9,6,3,7,9]
                },
                {
                    label: 'Steps',
                    type: 'bar',
                   backgroundColor: documentStyle.getPropertyValue('--cyan-300'),
                    borderColor: documentStyle.getPropertyValue('--cyan-300'),
                    borderWidth: 1,
                    barThickness: 30,
                    borderRadius: 10,
                    data: stepsData,
                },
              ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 2,
            plugins: {
                legend: {
                   display:false
                }, 
                title: {
                    display: true,
                    text: 'Injury Analysis',
                    position: 'top',
                    fontSize: 20,
                  },

            },
            scales: {
                x: {
                 
                    grid: {
                        color: surfaceBorder,
                        display:false
                    }
                },
                y: {
                    grid: {
                        color: surfaceBorder,
                        display:false
                    }
                }
            }
        };
       setInjuryData(injuryDataList)
        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <Card>
            <Chart type="line" data={injuryData} options={chartOptions} className='mb-6'/>
            <div className='flex'>
            <Chart type="line" data={chartData} options={chartOptions} className='flex-1'/>
            <Chart type="line" data={chartData} options={chartOptions} className='flex-1'/>
            </div>

        </Card>
    )
}
        