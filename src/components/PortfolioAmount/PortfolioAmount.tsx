import React, { useEffect, useState } from 'react';
import { Portfolio } from '../Portfolio/Portfolio';
import { useAppDispatch } from '../../hooks/redux';
import { getCoinFromApi, getPrice, getTotalAmount } from '../../utils/default';
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
        amountFromApi,
        localAmount,
        amountDifference
      } = await getAmountDifference();
      setAmountDifference(Number(amountDifference));
      setPercentAmountDifference(() => getPercentAmountDifference(amountFromApi, localAmount));
    })();
  }, [coins]);

  const getAmountDifference = async () => {
    let amountFromApi = 0;
    const coinsFromApi = await getCoinFromApi(dispatch);

    portfolioCoins.forEach((portfolioCoin: ICoinRow) => {
      const coin = coinsFromApi.find((coinFromApi: ICoinRow) => coinFromApi.key === portfolioCoin.key);
      if (coin) amountFromApi += Number(coin.priceUsd.slice(1)) * portfolioCoin.coinsNumber;
    });
    const localAmount = Number(getTotalAmount(portfolioCoins).slice(0, getTotalAmount(portfolioCoins).length - 4));
    return {
      amountDifference: getPrice(localAmount - amountFromApi),
      localAmount,
      amountFromApi,
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