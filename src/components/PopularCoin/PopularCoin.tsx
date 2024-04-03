import React from 'react';
import { getPrice } from '../../utils/default';

interface IPopularCoinProps {
  rating: any;
}

export const PopularCoin = ({ rating }: IPopularCoinProps) => {
  return (
    <div key={rating.id} className="popular-coin">
      {rating.symbol}:
      <div className="price">
        {`$${getPrice(rating.rateUsd)}`}
      </div>
    </div>
  );
};