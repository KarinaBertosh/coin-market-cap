import React, { useEffect, useState } from 'react';
import { getRates } from '../../api/assets';
import { PopularCoin } from '../PopularCoin/PopularCoin';
import './style.scss';


export const PopularCoins = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const coins = await getRates();
        setCoins(coins);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="popular-coins">
      {coins.map((rating) =>
        <PopularCoin rating={rating} key={rating.id} />
      )}
    </div >
  );
};