import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { getPrice } from '../../utils/default';


export const CoinInfo = () => {
  const { selectedCoin } = useAppSelector((state) => state.assets);
  const { name, symbol, rank, supply, maxSupply, priceUsd } = selectedCoin;

  return (
    <div className="m-b-10">
      <img src="logo" alt="logo" />
      <div>Name: {name}</div>
      <div>Symbol:{symbol}</div>
      <div>Rank: {rank}</div>
      <div>Supply: {supply ?? 0}</div>
      <div>Max supply: {maxSupply ?? 0}</div>
      <div>Price(usd): {`$ ${getPrice(priceUsd)}`}</div>
    </div>
  );
};