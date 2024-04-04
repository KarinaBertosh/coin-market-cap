import React from 'react';
import { ICoinRow } from '../../utils/types';
import { getTotalAmount } from '../../utils/default';
import useLocalStorageState from 'use-local-storage-state';
import { Button } from '../UI/Button/Button';


interface IPortfolioCoinProps {
  coin: ICoinRow;
}

export const PortfolioCoin = (props: IPortfolioCoinProps) => {
  const { coin } = props;
  const { key, symbol } = coin;

  const [coins, setCoins] = useLocalStorageState<string>('coins');

  const deleteCoin = () => {
    const updateCoins = JSON.parse(coins).filter((c: ICoinRow) => c.key !== coin.key);
    setCoins(JSON.stringify(updateCoins));
  };

  return (
    <div className="coin-block" key={key} >
      {symbol}:
      <p className="price">
        ${getTotalAmount([coin])} USD
      </p>
      <Button
        className="m-r-10"
        onClick={deleteCoin}
        buttonName='Delete'
      />
    </div>
  );
};