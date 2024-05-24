import React from 'react';
import { ICoinRow } from '../../utils/types';
import { PortfolioCoin } from '../PortfolioCoin/PortfolioCoin';
import { Modal } from '../UI/Modal/Modal';
import { KEY_LS } from '../../utils/default';
import './style.scss';

interface IPortfolioProps {
  isModalOpen: boolean,
  setIsModalOpen: (isModalOpen: boolean) => void;
}

export const Portfolio = ({ isModalOpen, setIsModalOpen }: IPortfolioProps) => {
  const coins = localStorage.getItem(KEY_LS);
  const portfolioCoins = coins ? JSON.parse(coins) : [];
  const portfolioIsEmpty = 'Your portfolio is empty';

  return (
    <Modal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      title="Portfolio"
      data-testid="portfolio-modal"
    >
      {
        portfolioCoins.length
          ? portfolioCoins.map((coin: ICoinRow) =>
            <PortfolioCoin coin={coin} key={coin.key} />)
          : <p>{portfolioIsEmpty}</p>
      }
    </Modal>
  );
};