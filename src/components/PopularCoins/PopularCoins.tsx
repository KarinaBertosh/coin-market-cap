import React, { useEffect, useState } from 'react';
import { getPopularCoins } from '../../api/assets';
import { PopularCoin } from '../PopularCoin/PopularCoin';
import './style.scss';


export const PopularCoins = () => {
  const [popularCoins, setPopularCoins] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const popularCoins = await getPopularCoins();
        setPopularCoins(popularCoins);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="popular-coins" data-testid="popular-coins">
      {popularCoins.map((rating) =>
        <PopularCoin rating={rating} key={rating.id} />
      )}
    </div >
  );
};