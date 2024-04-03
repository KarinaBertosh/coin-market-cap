import React, { useEffect, useState } from 'react';
import { Portfolio } from '../Portfolio/Portfolio';
import { useAppDispatch } from '../../hooks/redux';
import { getData, getPrice, getTotalAmount } from '../../utils/default';
import { ICoinRow } from '../../utils/types';
import useLocalStorageState from 'use-local-storage-state';
import './style.scss';


export const PortfolioAmount = () => {
  const [coins, setCoins] = useLocalStorageState<string>('coins');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amountDifference, setAmountDifference] = useState(0);
  const [percentAmountDifference, setPercentAmountDifference] = useState(0);

  const portfolioCoins = coins ? JSON.parse(coins) : [];
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const {
        newAmount,
        oldAmount,
        amountDifference
      } = await getAmountDifference();
      setAmountDifference(Number(amountDifference));
      setPercentAmountDifference(() => getPercentAmountDifference(newAmount, oldAmount));
    })();
  }, [coins]);

  const getAmountDifference = async () => {
    let newAmount = 0;
    const data = await getData(dispatch);
    portfolioCoins.forEach((coin: ICoinRow) => {
      const foundedCoin = data.find((c: ICoinRow) => c.key === coin.key);
      if (foundedCoin) newAmount += Number(foundedCoin.priceUsd.slice(1)) * coin.coinsNumber;
    });
    const oldAmount = Number(getTotalAmount(portfolioCoins).slice(0, getTotalAmount(portfolioCoins).length - 4));
    return {
      amountDifference: getPrice(oldAmount - newAmount),
      oldAmount,
      newAmount,
    };
  };

  const getPercentAmountDifference = (newAmount: number, oldAmount: number) => {
    return portfolioCoins.length
      ? Number(getPrice((newAmount / oldAmount - 1) * 100))
      : 0;
  };

  return (
    <>
      <div
        className="portfolio-amount"
        onClick={() => setIsModalOpen(true)}
      >
        <p className="price">
          {getTotalAmount(portfolioCoins)} &nbsp;
        </p>
        {amountDifference}&nbsp;{percentAmountDifference}&nbsp;%
      </div >
      <Portfolio
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen} />
    </>
  );
};