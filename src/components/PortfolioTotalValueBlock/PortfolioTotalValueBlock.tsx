import React, { useState } from 'react';
import { Portfolio } from '../Portfolio/Portfolio';
import { useAppSelector } from '../../hooks/redux';
import { getPrice, getTotalValue } from '../../utils/default';
import '../../style.scss';
import './style.scss';


export const PortfolioTotalValueBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { portfolioCoins, portfolioDifferenceCost, portfolioDifferenceCostPercent } = useAppSelector((state) => state.assets);

  const getTotalPortfolioValue = () => {
    if (!portfolioCoins.length) return `0 USD`;
    const totalValue = getPrice(String(getTotalValue(portfolioCoins)));
    return `${totalValue} USD`;
  };

  return (
    <>
      <div className='portfolio-value-block' onClick={() => setIsModalOpen(true)}>
        <div className='price'>
          {getTotalPortfolioValue()} &nbsp;
        </div>
        {getPrice(portfolioDifferenceCost)} &nbsp;
        ({portfolioDifferenceCostPercent} %)
      </div >
      <Portfolio isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};