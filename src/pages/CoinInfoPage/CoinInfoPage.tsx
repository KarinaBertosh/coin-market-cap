import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { getCoinPrices } from '../../api/assets';
import { callApi, getFormattedValue } from '../../utils/default';
import { ICoinRow } from '../../utils/types';
import { CoinInfo } from '../../components/CoinInfo/CoinInfo';
import { CoinChart } from '../../components/CoinChart/CoinChart';
import { NavigationButtons } from '../../components/NavigationButtons/NavigationButtons';


export const CoinInfoPage = () => {
  const [coinPrices, setCoinPrices] = useState([]);
  const [chartType, setChartType] = useState('d1');
  const [isLoading, setIsLoading] = useState(false);

  const { selectedCoin, coinsRow } = useAppSelector((state) => state.assets);
  const coin = coinsRow.find((coin: ICoinRow) => coin.key === selectedCoin?.id);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const coinPrices = await callApi(async () => await getCoinPrices({
        id: selectedCoin.id,
        interval: chartType
      }));
      console.log({coinPrices});
      
      setCoinPrices(coinPrices.map((el: ICoinRow) => getFormattedValue(el.priceUsd, 0)));
      setIsLoading(false);
    })();
  }, [chartType]);

  return (
    <>
      <NavigationButtons coin={coin} />
      {selectedCoin &&
        <>
          <CoinInfo />
          <CoinChart
            coinPrices={coinPrices}
            setChartType={setChartType}
            isLoading={isLoading}
          />
        </>
      }
    </>
  );
};