import React from 'react';
import { getFormattedValue } from '../../utils/default';

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
        {`$${getFormattedValue(rating.rateUsd)}`}
      </div>
    </div>
  );
};