import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchAssetHistory } from '../../api/assets';
import { getPrice } from '../../utils/default';
import { IRowData } from '../../utils/types';
import { CoinInfo } from '../../components/CoinInfo/CoinInfo';
import { CoinChart } from '../../components/CoinChart/CoinChart';
import { NavigationButtons } from '../../components/NavigationButtons/NavigationButtons';
import './style.scss';


export const CoinInfoPage = () => {
  const [historyCoinPriceChanges, setHistoryCoinPriceChanges] = useState([]);
  const [currentChartType, setCurrentChartType] = useState('d1');

  const dispatch = useAppDispatch();

  const { selectedCoin, tableData } = useAppSelector((state) => state.assets);
  const foundSelectedCoin = tableData.find((coin: IRowData) => coin.key === selectedCoin?.id);


  useEffect(() => {
    (async () => {
      try {
        const historyCoinPriceChanges = await dispatch(fetchAssetHistory({
          id: selectedCoin.id,
          interval: currentChartType
        })).unwrap();
        setHistoryCoinPriceChanges(historyCoinPriceChanges.map((el: any) => Number(getPrice(el.priceUsd, 0))));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [currentChartType]);

  return (
    <>
      <NavigationButtons foundSelectedCoin={foundSelectedCoin} />
      {selectedCoin &&
        <>
          <CoinInfo />
          <CoinChart
            historyCoinPriceChanges={historyCoinPriceChanges}
            setCurrentChartType={setCurrentChartType}
          />
        </>
      }
    </>
  );
};