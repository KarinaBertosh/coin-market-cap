import React from 'react';
import { Modal as ModalWindow } from 'antd';
import { useAppSelector } from '../../hooks/redux';
import { ICoinRow } from '../../utils/types';
import { DeleteButton } from '../DeleteButton/DeleteButton';
import { getPrice } from '../../utils/default';
import './style.scss';

interface IPortfolioProps {
  isModalOpen: boolean,
  setIsModalOpen: (isModalOpen: boolean) => void;
}

export const Portfolio = (props: IPortfolioProps) => {
  const { isModalOpen, setIsModalOpen } = props;
  const { portfolioCoins } = useAppSelector((state) => state.assets);

  return (
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
              <div className="price">{`${getPrice(coin.priceUsd)}`}</div>
            </div>
            <DeleteButton coin={coin} value={"Delete"} />
          </div>)
        : <div>Your portfolio is empty</div>}
    </ModalWindow >
  );
};