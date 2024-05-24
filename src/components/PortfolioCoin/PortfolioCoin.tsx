import React from 'react';
import { ICoinRow } from '../../utils/types';
import { KEY_LS, getFormattedPriceCoins, getTotalAmount, renderDollarAmount } from '../../utils/default';
import { Button } from '../UI/Button/Button';
import { useAppDispatch } from '../../hooks/redux';
import { setCoins } from '../../store/slices/assets';

interface IPortfolioCoinProps {
  coin: ICoinRow;
}

export const PortfolioCoin = ({ coin }: IPortfolioCoinProps) => {
  const { key, symbol } = coin;
  const coins = localStorage.getItem(KEY_LS);

  const dispatch = useAppDispatch();

  const deleteCoin = () => {
    const filteredCoins = JSON.parse(coins).filter((c: ICoinRow) => c.key !== coin.key);
    localStorage.setItem(KEY_LS, JSON.stringify(filteredCoins));
    dispatch(setCoins(getFormattedPriceCoins(JSON.parse(localStorage.getItem(KEY_LS)))));
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
        buttonName="Delete"
      />
    </div>
  );
};