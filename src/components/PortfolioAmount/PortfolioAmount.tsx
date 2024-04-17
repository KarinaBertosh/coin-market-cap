import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import useLocalStorageState from 'use-local-storage-state';
import { Portfolio } from '../Portfolio/Portfolio';
import { ICoinRow } from '../../utils/types';
import {
  KEY_LS,
  getCoinFromApi,
  getFormattedPriceCoins,
  getFormattedValue,
  getTotalAmount,
  renderDollarAmount
} from '../../utils/default';
import './style.scss';


export const PortfolioAmount = () => {
  const [coins, setCoins] = useState(localStorage.getItem(KEY_LS));  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amountDifference, setAmountDifference] = useState(0);
  const [percentAmountDifference, setPercentAmountDifference] = useState(0);

  const dispatch = useAppDispatch();

  const parsedCoins = getFormattedPriceCoins(JSON.parse(coins));
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
    const coinsFromApi = getFormattedPriceCoins(await getCoinFromApi(dispatch));
    parsedCoins.forEach((parsedCoin: ICoinRow) => {
      const coin = coinsFromApi.find((coinFromApi: ICoinRow) => coinFromApi.key === parsedCoin.key);
      if (coin) amountFromApi += Number(coin.priceUsd.slice(1)) * parsedCoin.coinsNumber;
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
          {renderDollarAmount(getTotalAmount(parsedCoins))} &nbsp;
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