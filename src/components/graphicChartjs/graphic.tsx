import React, { FC, useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import { tpPie } from '@/enums/graphic';

Chart.register(...registerables);

interface PieChartProps {
    data: number[];
    labels: string[];
}

const PieChart:FC<PieChartProps> = ({ data, labels }) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);


    const [pie, setPie] = useState<tpPie>({
        dataP: [3,4,5],
        labelsP: ['hola', 'adios', 'verde']
    })

    const {dataP,labelsP}=pie

    useEffect(() => {
        const ctx = chartRef.current?.getContext('2d');
        if (ctx) {
            new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: labelsP,
                    datasets: [{
                        label: 'Mi Dataset',
                        data: dataP,
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    }],
                },
                options: {
                    responsive: true,
                },
            });
        }

        return () => {
            if (chartRef.current) {
                const chartInstance = Chart.getChart(chartRef.current);
                if (chartInstance) {
                    chartInstance.destroy();
                }
            }
        };
    }, [data, labels]);

    return <canvas ref={chartRef} width={400} height={400}></canvas>;
};

export default PieChart;
