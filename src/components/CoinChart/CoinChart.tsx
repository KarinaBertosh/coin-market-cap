import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { Select, Spin } from 'antd';
import { LineChart } from '@mui/x-charts/LineChart';

interface ICoinChart {
  historyCoinPriceChanges: any,
  setCurrentChartType: (type: any) => void;
}

export const CoinChart = ({ historyCoinPriceChanges, setCurrentChartType }: ICoinChart) => {
  const { isLoading } = useAppSelector((state) => state.assets);

  return (
    <div className='chart'>
      <Select
        defaultValue="Price change chart per:"
        style={{ width: 300 }}
        onChange={(type) => setCurrentChartType(type)}
        options={[
          { value: 'd1', label: 'Day' },
          { value: 'h12', label: '12 hours' },
          { value: 'h1', label: '1 hour' },
        ]}
        className='m-b-10'
      />
      {
        isLoading
          ? <Spin />
          : <LineChart
            xAxis={[{ data: historyCoinPriceChanges }]}
            series={[{ data: historyCoinPriceChanges }]}
            width={1200}
            height={300}
          />
      }
    </div>
  );
};