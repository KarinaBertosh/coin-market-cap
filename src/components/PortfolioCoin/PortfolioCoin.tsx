import React from 'react';
import { ICoinRow } from '../../utils/types';
import { DeleteButton } from '../DeleteButton/DeleteButton';
import { getTotalAmount } from '../../utils/default';


interface IPortfolioCoinProps {
  coin: ICoinRow;
}

export const PortfolioCoin = (props: IPortfolioCoinProps) => {
  const { coin } = props;
  const { key, symbol } = coin;

  return (
    <div className="coin-block" key={key} >
      <div style={{ display: 'flex' }}>
        {symbol}:
        <div className="price">
          {getTotalAmount([coin])}
        </div>
      </div>
      <DeleteButton coin={coin} value={"Delete"} />
    </div>
  );
};