import React from 'react';
import { ICoinRow } from '../../utils/types';
import useLocalStorageState from 'use-local-storage-state';
import { PortfolioCoin } from '../PortfolioCoin/PortfolioCoin';
import { Modal } from '../Modal/Modal';
import './style.scss';

interface IPortfolioProps {
  isModalOpen: boolean,
  setIsModalOpen: (isModalOpen: boolean) => void;
}

export const Portfolio = (props: IPortfolioProps) => {
  const { isModalOpen, setIsModalOpen } = props;
  const [coins, setCoins] = useLocalStorageState<string>('coins');

  const portfolioCoins = coins
    ? JSON.parse(coins)
    : [];
  const emptyPortfolioText = 'Your portfolio is empty';

  return (
    <Modal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      title='Portfolio'
    >
      {
        portfolioCoins.length
          ? portfolioCoins.map((coin: ICoinRow) =>
            <PortfolioCoin coin={coin} />)
          : <p>{emptyPortfolioText}</p>
      }
    </Modal>
  );
};