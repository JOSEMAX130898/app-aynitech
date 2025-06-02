import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ChartWidget = ({ type, data }) => {
  const chartProps = {
    data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Gráfico dinámico con Chart.js',
        },
      },
    },
  };

  if (type === 'line') return <Line {...chartProps} />;
  if (type === 'pie') return <Pie {...chartProps} />;
  return <Bar {...chartProps} />;
};

export default ChartWidget;