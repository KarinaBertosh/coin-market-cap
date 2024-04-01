import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { getPrice } from '../../utils/default';


export const CoinInfo = () => {
  const { selectedCoin } = useAppSelector((state) => state.assets);

  return (
    <div className='m-b-10'>
      <img src="logo" alt="logo" />
      <div>Name: {selectedCoin.name}</div>
      <div>Symbol:{selectedCoin.symbol}</div>
      <div>Rank: {selectedCoin.rank}</div>
      <div>Supply: {selectedCoin.supply ?? 0}</div>
      <div>Max supply: {selectedCoin.maxSupply ?? 0}</div>
      <div>Price(usd): {`$ ${getPrice(selectedCoin.priceUsd)}`}</div>
    </div>
  );
};