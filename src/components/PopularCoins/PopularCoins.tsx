import React, { useEffect, useState } from 'react';
import { getRates } from '../../api/assets';
import { PopularCoin } from '../PopularCoin/PopularCoin';
import { callApi } from '../../utils/default';
import './style.scss';


export const PopularCoins = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    (async () => {
      const coins = await callApi(async () => await getRates());
      setCoins(coins);
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