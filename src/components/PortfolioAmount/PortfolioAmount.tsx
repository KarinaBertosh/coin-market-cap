import React, { useEffect, useState } from 'react';
import { Portfolio } from '../Portfolio/Portfolio';
import { useAppDispatch } from '../../hooks/redux';
import { getData, getPrice, getCoinsTotalValue, getTotalAmount } from '../../utils/default';
import { ICoinRow } from '../../utils/types';
import useLocalStorageState from 'use-local-storage-state';
import './style.scss';


export const PortfolioAmount = () => {
  const [coins, setCoins] = useLocalStorageState<string>('coins');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [differenceAmount, setDifferenceAmount] = useState(0);
  const [differenceAmountPercent, setDifferenceAmountPercent] = useState(0);

  const portfolioCoins = coins ? JSON.parse(coins) : [];
  const dispatch = useAppDispatch();


  useEffect(() => {
    (async () => {
      const { totalAmountLocal, oldTotalAmount, differenceAmount } = await getDifferenceAmount();
      setDifferenceAmount(Number(differenceAmount));
      setDifferenceAmountPercent(() => getPortfolioDifferencePercent(totalAmountLocal, oldTotalAmount));
    })();
  },);

  const getDifferenceAmount = async () => {
    let totalAmountLocal = 0;
    const data = await getData(dispatch);
    portfolioCoins.forEach((coin: ICoinRow) => {
      const foundedCoin = data.find((c: ICoinRow) => c.key === coin.key);
      if(foundedCoin) totalAmountLocal += Number(foundedCoin.priceUsd.slice(1)) * coin.coinsNumber;
    });
    const oldTotalAmount = Number(getTotalAmount(portfolioCoins).slice(0, getTotalAmount(portfolioCoins).length - 4));

    return {
      differenceAmount: getPrice(oldTotalAmount - totalAmountLocal),
      oldTotalAmount,
      totalAmountLocal,
    };
  };

  const getPortfolioDifferencePercent = (totalAmountLocal: number, oldTotalAmount: number) => {
    return portfolioCoins.length
      ? Number(getPrice((totalAmountLocal / oldTotalAmount - 1) * 100))
      : 0;
  };

  return (
    <>
      <div
        className="portfolio-amount"
        onClick={() => setIsModalOpen(true)}>
        <div className="price">
          {getTotalAmount(portfolioCoins)} &nbsp;
        </div>
        {differenceAmount}&nbsp;{differenceAmountPercent}&nbsp;%
      </div >
      <Portfolio
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen} />
    </>
  );
};