import React, { useEffect, useState } from 'react';
import { Portfolio } from '../Portfolio/Portfolio';
import { useAppDispatch } from '../../hooks/redux';
import { getCoinFromApi, getFormattedValue, getTotalAmount } from '../../utils/default';
import { ICoinRow } from '../../utils/types';
import useLocalStorageState from 'use-local-storage-state';
import './style.scss';


export const PortfolioAmount = () => {
  const [coins, setCoins] = useLocalStorageState<string>('coins');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amountDifference, setAmountDifference] = useState(0);
  const [percentAmountDifference, setPercentAmountDifference] = useState(0);

  const dispatch = useAppDispatch();

  const parsedCoins = JSON.parse(coins);
  const plus = '+';

  useEffect(() => {
    (async () => {
      const {
        amountFromApi,
        localAmount,
        amountDifference
      } = await getAmountDifference();
      setAmountDifference(Number(amountDifference));
      setPercentAmountDifference(getPercentAmountDifference(amountFromApi, localAmount));
    })();

  }, [coins]);

  const getAmountDifference = async () => {
    let amountFromApi = 0;
    const coinsFromApi = await getCoinFromApi(dispatch);
    parsedCoins.forEach((portfolioCoin: ICoinRow) => {
      const coin = coinsFromApi.find((coinFromApi: ICoinRow) => coinFromApi.key === portfolioCoin.key);
      if (coin) amountFromApi += Number(coin.priceUsd.slice(1)) * portfolioCoin.coinsNumber;
    });
    const localAmount = Number(getTotalAmount(parsedCoins));
    return {
      amountDifference: getFormattedValue(String(localAmount - amountFromApi)),
      localAmount,
      amountFromApi,
    };
  };

  const getPercentAmountDifference = (amountFromApi: number, localAmount: number) => {
    const percent = Number(getFormattedValue(String((localAmount / amountFromApi - 1) * 100)));
    const finalPercent = String(percent).startsWith('-') ? Number(String(percent).slice(1)) : percent;

    return parsedCoins.length
      ? finalPercent
      : 0;
  };

  return (
    <>
      <div
        className="portfolio-amount"
        onClick={() => setIsModalOpen(true)}
      >
        <p className="price">
          ${getTotalAmount(parsedCoins)} USD &nbsp;
        </p>
        {amountDifference > 0 && plus}
        {amountDifference}&nbsp;{percentAmountDifference}&nbsp;%
      </div >
      <Portfolio
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen} />
    </>
  );
};