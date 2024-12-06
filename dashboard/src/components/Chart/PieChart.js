import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {useSelector} from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    // Chuẩn bị dữ liệu cho biểu đồ
    const { brandSold } = useSelector(state => state.dashboard);

    const chartData = {
        labels: brandSold.map(item => item[0]), // Lấy tên thương hiệu
        datasets: [
            {
                label: 'Total Sold',
                data: brandSold.map(item => item[1]), // Lấy số lượng bán
                backgroundColor: [
                    '#4318FF',
                    '#6AD2FF',
                    '#01B574',
                    '#FFB547',
                    '#EFF4FB',
                    '#AEA2C5',
                    '#BCB19F',
                ],
                hoverOffset: 5,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'left',
                labels: {
                    font: {
                        size: 14,
                    },
                },
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
                },
            },
        },
    };

    return (
        <div className={''}>
            <div className={'flex items-center justify-center mt-2'}>
                <h3 className={'text-sm font-semibold text-gray-500'}>Brand Sales Distribution</h3>
            </div>
            <Pie data={chartData} options={options}/>
        </div>
    );
};

export default PieChart;
