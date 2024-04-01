import React, { useEffect, useState } from 'react';
import { fetchRates } from '../../api/assets';
import { PopularCoin } from '../PopularCoin/PopularCoin';
import '../../style.scss';
import './style.scss';


export const PopularCoinsBlock = () => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const rates = await fetchRates();
        setRatings(rates);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className='popular-coins-block'>
      {ratings.map((rating) =>
        <PopularCoin rating={rating} key={rating.id}/>
      )}
    </div >
  );
};