import React from 'react';
import { Modal as ModalWindow } from 'antd';
import { useAppSelector } from '../../hooks/redux';
import { IRowData } from '../../utils/types';
import { DeleteButton } from '../DeleteButton/DeleteButton';
import { getPrice } from '../../utils/default';
import '../../style.scss';
import './style.scss';

interface IModalProps {
  isModalOpen: boolean,
  setIsModalOpen: (isModalOpen: boolean) => void;
}

export const Modal = (props: IModalProps) => {
  const { isModalOpen, setIsModalOpen } = props;
  const { portfolioCoins } = useAppSelector((state) => state.assets);

  const getPortfolioCoins = () => {
    const result: IRowData[] = [];
    portfolioCoins.forEach((coin: IRowData) => {
      const foundIndexCoin = result.findIndex((c) => c.key === coin.key);
      if (foundIndexCoin >= 0) {
        result[foundIndexCoin] = {
          ...result[foundIndexCoin],
          priceUsd: `$${Number(getPrice(result[foundIndexCoin].priceUsd.slice(1))) + Number(getPrice(coin.priceUsd.slice(1)))}`
        };
      } else {
        result.push(coin);
      }
    });
    return result;
  };

  return (
    <ModalWindow
      title="My portfolio"
      open={isModalOpen}
      footer=""
      onCancel={() => setIsModalOpen(false)}
    >
      {portfolioCoins.length
        ? getPortfolioCoins().map((coin: IRowData) =>
          <div className="coin-block" key={coin.key}>
            <div style={{ display: 'flex' }}>
              {coin.symbol}:
              <div className='price'>{`${getPrice(coin.priceUsd)}`}</div>
            </div>
            <DeleteButton record={coin} value={"Delete"} />
          </div>)
        : <div>Your portfolio is empty</div>}
    </ModalWindow>
  );
};