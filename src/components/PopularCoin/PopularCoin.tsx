import React from 'react';
import { getPrice } from '../../utils/default';

interface IPopularCoinProps {
  rating: IRating;
}

interface IRating {
  id: string,
  symbol: string,
  currencySymbol: string,
  type: string,
  rateUsd: string,
}

export const PopularCoin = ({ rating }: IPopularCoinProps) => {
  return (
    <div key={rating.id} className="popular-coin">
      {rating.symbol}:
      <div className="price">
        {`$${getPrice(Number(rating.rateUsd))}`}
      </div>
    </div>
  );
};