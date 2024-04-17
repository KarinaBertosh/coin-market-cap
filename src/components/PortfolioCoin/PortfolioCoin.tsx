import React from 'react';
import { ICoinRow } from '../../utils/types';
import { KEY_LS, getTotalAmount, renderDollarAmount } from '../../utils/default';
// import useLocalStorageState from 'use-local-storage-state';
import { Button } from '../UI/Button/Button';

interface IPortfolioCoinProps {
  coin: ICoinRow;
}

export const PortfolioCoin = (props: IPortfolioCoinProps) => {
  const { coin } = props;
  const { key, symbol } = coin;

  const coins = localStorage.getItem(KEY_LS)

  const deleteCoin = () => {
    const updateCoins = JSON.parse(coins).filter((c: ICoinRow) => c.key !== coin.key);
    localStorage.setItem(KEY_LS, JSON.stringify(updateCoins));
  };

  return (
    <div className="coin-block" key={key} >
      {symbol}:
      <p className="price">
        {renderDollarAmount(getTotalAmount([coin]))}
      </p>
      <Button
        className="m-r-10"
        onClick={deleteCoin}
        buttonName='Delete'
      />
    </div>
  );
};