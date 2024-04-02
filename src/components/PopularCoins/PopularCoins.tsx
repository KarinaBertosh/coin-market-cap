import React, { useEffect, useState } from 'react';
import { fetchRates } from '../../api/assets';
import { PopularCoin } from '../PopularCoin/PopularCoin';
import './style.scss';
import { callApi } from '../../utils/default';


export const PopularCoins = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    (async () => {
      const coins = await callApi(async () => await fetchRates());
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