import React, { useEffect, useState } from 'react';
import { fetchRates } from '../../api/assets';
import { getPrice } from '../../utils/default';
import '../../style.scss';
import './style.scss';


export const PopularCoinsBlock = () => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const rates = await fetchRates();
        setRates(rates);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className='popular-coins-block'>
      {rates.map((rate) =>
        <div key={rate.id} className='popular-coin-block'>
          {rate.symbol}:
          <div className='price'>
            {`$${getPrice(rate.rateUsd)}`}
          </div>
        </div>)}
    </div >
  );
};