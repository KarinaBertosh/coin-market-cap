import React from 'react';
import { Modal as ModalWindow } from 'antd';
import { ICoinRow } from '../../utils/types';
import useLocalStorageState from 'use-local-storage-state';
import { PortfolioCoin } from '../PortfolioCoin/PortfolioCoin';
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
    <ModalWindow
      title="My portfolio"
      open={isModalOpen}
      footer=""
      onCancel={() => setIsModalOpen(false)}
    >
      {
        portfolioCoins.length
          ? portfolioCoins.map((coin: ICoinRow) =>
            <PortfolioCoin coin={coin} />)
          : <p>{emptyPortfolioText}</p>
      }
    </ModalWindow >
  );
};