import React, { useEffect, useState } from 'react';
import { PortfolioModal } from '../PortfolioModal/PortfolioModal';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getData, getPrice, getTotalValue } from '../../utils/default';
import { IRowData } from '../../utils/types';
import './style.scss';


export const PortfolioTotalValueBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [differenceCost, setDifferenceCost] = useState('0');
  const [differenceCostPercent, setDifferenceCostPercent] = useState('0');

  const dispatch = useAppDispatch();
  const { portfolioCoins } = useAppSelector((state) => state.assets);

  const getTotalPortfolioValue = () => {
    if (!portfolioCoins.length) return `0 USD`;
    const totalValue = getPrice(String(getTotalValue(portfolioCoins)));
    return `${totalValue} USD`;
  };

  const getDifferenceCost = async () => {
    let difference = 0;
    const data = await getData(dispatch);
    portfolioCoins.forEach((coin: IRowData) => {
      const foundCoin = data.find((c: IRowData) => c.key === coin.key);
      difference += Number(foundCoin.priceUsd.slice(1)) * coin.coinsNumber;
    });
    const totalValue = Number(getTotalPortfolioValue().slice(0, getTotalPortfolioValue().length - 4));

    return {
      differenceCost: getPrice(String(totalValue - difference)),
      totalValue,
      difference
    };
  };

  const getPortfolioDifference = (result: number, totalValue: number) => {
    return portfolioCoins.length
      ? getPrice(String((result / totalValue - 1) * 100))
      : 0;
  };

  useEffect(() => {
    (async () => {
      const { difference, totalValue, differenceCost } = await getDifferenceCost();
      setDifferenceCost(differenceCost);
      setDifferenceCostPercent(() => getPortfolioDifference(difference, totalValue));
    })();
  }, [portfolioCoins]);

  return (
    <>
      <div className='portfolio-value-block' onClick={() => setIsModalOpen(true)}>
        <div className='price'>
          {getTotalPortfolioValue()} &nbsp;
        </div>
        {differenceCost}&nbsp;{differenceCostPercent}&nbsp;%
      </div >
      <PortfolioModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};