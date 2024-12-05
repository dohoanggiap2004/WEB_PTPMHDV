import React, {useEffect} from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {useSelector} from "react-redux";

// Đăng ký các thành phần cần thiết cho Line Chart
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
    const { revenue } = useSelector(state => state.dashboard);

    // Tạo mảng chứa tất cả các tháng trong năm và đặt giá trị mặc định là 0
    const labels = [
        '2024-01', '2024-02', '2024-03', '2024-04', '2024-05', '2024-06',
        '2024-07', '2024-08', '2024-09', '2024-10', '2024-11', '2024-12'
    ];

    // Khởi tạo mảng dữ liệu với 12 phần tử có giá trị 0
    const dataValues = Array(12).fill(0);

    // Điền dữ liệu từ jsonData vào đúng tháng trong dataValues
    revenue.forEach(item => {
        const monthIndex = labels.indexOf(item.month); // Tìm vị trí của tháng
        if (monthIndex !== -1) {
            dataValues[monthIndex] = parseFloat(item.totalRevenue); // Điền giá trị doanh thu
        }
    });

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Doanh thu ',
                data: dataValues,
                borderColor: '#603DFF',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                fill: true, // Đổ màu phía dưới đường biểu đồ
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Doanh thu hàng tháng trong năm 2024',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        animation: {
            duration: 1500,
            easing: 'easeInOutQuad',
            animateScale: true,
        },
    };

    return <Line data={data} options={options} />;
};

export default LineChart;
