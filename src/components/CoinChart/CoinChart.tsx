import React from 'react';
import { Select, Spin } from 'antd';
import { LineChart } from '@mui/x-charts/LineChart';
import './style.scss';

interface ICoinChartProps {
  coinPrices: number[],
  setChartType: (type: string) => void;
  isLoading: boolean;
}

const OPTIONS = [
  { value: 'd1', label: 'Day' },
  { value: 'h12', label: '12 hours' },
  { value: 'h1', label: '1 hour' },
];

export const CoinChart = ({ coinPrices, setChartType, isLoading }: ICoinChartProps) => {
  return (
    <div className="chart" data-testid="chart">
      <Select
        defaultValue="Price change chart per:"
        style={{ width: 300 }}
        onChange={(type) => setChartType(type)}
        options={OPTIONS}
        className="m-b-10"
        data-testid="select-time"
      />
      {
        isLoading
          ? <Spin />
          : <LineChart
            xAxis={[{ data: coinPrices }]}
            series={[{ data: coinPrices }]}
            width={1200}
            height={300}
          />
      }
    </div>
  );
};