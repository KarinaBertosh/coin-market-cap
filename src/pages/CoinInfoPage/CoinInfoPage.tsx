import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { Button, Select, Spin } from 'antd';
import { LineChart } from '@mui/x-charts/LineChart';
import { fetchAssetHistory } from '../../api/assets';
import { getPrice, navigateToMain } from '../../utils/default';
import '../../style.scss';
import './style.scss';
import { AddButton } from '../../components/AddButton/AddButton';


export function CoinInfoPage() {
  const [data, setData] = useState([]);
  const [currentChartType, setCurrentChartType] = useState('d1');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { selectedCoin, isLoading } = useAppSelector((state) => state.assets);

  useEffect(() => {
    (async () => {
      try {
        const historyCoinPriceChanges = await dispatch(fetchAssetHistory({
          id: selectedCoin.id,
          interval: currentChartType
        })).unwrap();
        setData(historyCoinPriceChanges.map((el: any) => Number(getPrice(el.priceUsd, 0))));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [currentChartType]);

  const renderBackButton = () => <Button className='m-r-10' onClick={() => navigateToMain(navigate)}>Back</Button>;


  return (
    <>
      {
        selectedCoin != undefined
          ? <>
            <div className='m-b-10'>
              {renderBackButton()}
              <AddButton record={selectedCoin} value={"Add"} />
            </div>
            <div>
              <div className='m-b-10'>
                <img src="logo" alt="logo" />
                <div>Name: {selectedCoin.name}</div>
                <div>Symbol:{selectedCoin.symbol}</div>
                <div>Rank: {selectedCoin.rank}</div>
                <div>Supply: {selectedCoin.supply ?? 0}</div>
                <div>Max supply: {selectedCoin.maxSupply ?? 0}</div>
                <div>Price(usd): {`$ ${getPrice(selectedCoin.priceUsd)}`}</div>
              </div>
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
                      xAxis={[{ data: data }]}
                      series={[{ data: data }]}
                      width={1200}
                      height={300}
                    />
                }
              </div>
            </div>
          </>
          : <>
            {renderBackButton()}
            <h1>Go to the main page to pick up your coin</h1>
          </>
      }
    </>
  );
}