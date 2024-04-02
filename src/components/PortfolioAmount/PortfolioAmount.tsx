import React, { useEffect, useState } from 'react';
import { Portfolio } from '../Portfolio/Portfolio';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getData, getPrice, getCoinsTotalValue } from '../../utils/default';
import { ICoinRow } from '../../utils/types';
import './style.scss';


export const PortfolioAmount = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [differenceAmount, setDifferenceAmount] = useState(0);
  const [differenceAmountPercent, setDifferenceAmountPercent] = useState(0);

  const dispatch = useAppDispatch();
  const { portfolioCoins } = useAppSelector((state) => state.assets);

  const getTotalAmount = () => {
    if (!portfolioCoins.length) return `0 USD`;
    const totalAmount = getPrice(getCoinsTotalValue(portfolioCoins));
    return `${totalAmount} USD`;
  };

  const getDifferenceAmount = async () => {
    let difference = 0;
    const data = await getData(dispatch);
    portfolioCoins.forEach((coin: ICoinRow) => {
      const foundCoin = data.find((c: ICoinRow) => c.key === coin.key);
      difference += Number(foundCoin.priceUsd.slice(1)) * coin.coinsNumber;
    });
    const totalAmount = Number(getTotalAmount().slice(0, getTotalAmount().length - 4));

    return {
      differenceAmount: getPrice(totalAmount - difference),
      totalAmount: totalAmount,
      difference: difference,
    };
  };

  const getPortfolioDifferencePercent = (difference: number, totalValue: number) => {
    return portfolioCoins.length
      ? Number(getPrice((difference / totalValue - 1) * 100))
      : 0;
  };

  useEffect(() => {
    (async () => {
      const { difference, totalAmount, differenceAmount } = await getDifferenceAmount();
      setDifferenceAmount(Number(differenceAmount));
      setDifferenceAmountPercent(() => getPortfolioDifferencePercent(difference, totalAmount));
    })();
  }, [portfolioCoins]);

  return (
    <>
      <div
        className="portfolio-amount"
        onClick={() => setIsModalOpen(true)}>
        <div className="price">
          {getTotalAmount()} &nbsp;
        </div>
        {differenceAmount}&nbsp;{differenceAmountPercent}&nbsp;%
      </div >
      <Portfolio
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen} />
    </>
  );
};