import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { getCoinPrices } from '../../api/assets';
import { getPrice } from '../../utils/default';
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
      try {
        setIsLoading(true);
        const coinPrices = await getCoinPrices({
          id: selectedCoin.id,
          interval: chartType
        });
        setCoinPrices(coinPrices.map((el: any) => Number(getPrice(el.priceUsd, 0))));
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
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