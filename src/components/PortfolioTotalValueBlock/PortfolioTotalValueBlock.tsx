import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { useAppSelector } from '../../hooks/redux';
import { getTotalValue } from '../../utils/default';
import '../../style.scss';
import './style.scss';


export const PortfolioTotalValueBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { portfolioCoins, portfolioDifferenceCost, portfolioDifferenceCostPercent } = useAppSelector((state) => state.assets);

  const getTotalPortfolioValue = () => {
    if (!portfolioCoins.length) return `0 USD`;
    const totalValue = getTotalValue(portfolioCoins);
    return `${totalValue} USD`;
  };

  return (
    <>
      <div className='portfolio-value-block' onClick={() => setIsModalOpen(true)}>
        <div className='price'>
          {getTotalPortfolioValue()} &nbsp;
        </div>
        {portfolioDifferenceCost} &nbsp;
        ({portfolioDifferenceCostPercent} %)
      </div >
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};