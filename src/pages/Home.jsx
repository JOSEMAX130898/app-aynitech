import { useState, useEffect } from 'react';
import { generateMockData } from "../data/mockData";
import Controls from "../components/Controls";
import D3Widget from "../components/D3Widget";
import ChartWidget from "../components/ChartWidget"
const HomePage = () => {
  const [chartType, setChartType] = useState('bar');
  const [chartData, setChartData] = useState(generateMockData());
  const updateData = () => {
    setChartData(generateMockData());
  };

  useEffect(() => {
    generateMockData();
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 gap-4">
      <Controls onChangeType={setChartType} onRefresh={updateData} />
      <div className="md:col-span-2 flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2 w-full">
          <ChartWidget type={chartType} data={chartData} />
        </div>
        <div className="md:w-1/2 w-full">
          <D3Widget data={chartData} />
        </div>
      </div>
    </div>
  )
}

export default HomePage