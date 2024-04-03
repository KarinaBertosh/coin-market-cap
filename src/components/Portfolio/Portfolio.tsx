import React from 'react';
import { Modal as ModalWindow } from 'antd';
import { ICoinRow } from '../../utils/types';
import { DeleteButton } from '../DeleteButton/DeleteButton';
// import { getTotalAmount } from '../../utils/default';
import useLocalStorageState from 'use-local-storage-state';
import './style.scss';
import { getCoinsTotalValue, getPrice, getTotalAmount } from '../../utils/default';

interface IPortfolioProps {
  isModalOpen: boolean,
  setIsModalOpen: (isModalOpen: boolean) => void;
}

export const Portfolio = (props: IPortfolioProps) => {
  const { isModalOpen, setIsModalOpen } = props;
  const [coins, setCoins] = useLocalStorageState<string>('coins');

  const portfolioCoins = coins ? JSON.parse(coins) : [];

  return (
    // <></>
    <ModalWindow
      title="My portfolio"
      open={isModalOpen}
      footer=""
      onCancel={() => setIsModalOpen(false)}
    >
      {portfolioCoins.length
        ? portfolioCoins.map((coin: ICoinRow) =>
          <div className="coin-block" key={coin.key} >
            <div style={{ display: 'flex' }}>
              {coin.symbol}:
              <div className="price">{getTotalAmount([coin])}</div>
              <div className="price">{0}</div>
            </div>
            <DeleteButton coin={coin} value={"Delete"} />
          </div>)
        : <div>Your portfolio is empty</div>
      }
    </ModalWindow >
  );
};