import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { getPrice } from '../../utils/default';

const COIN_INFO_COLUMNS = {
  NAME: 'Name: ',
  SYMBOL: 'Symbol: ',
  RANK: 'Rank: ',
  SUPPLY: 'Supply: ',
  MAX_SUPPLY: 'Max supply: ',
  PRICE: 'Price(usd): '
};

export const CoinInfo = () => {
  const { selectedCoin } = useAppSelector((state) => state.assets);
  const { name, symbol, rank, supply, maxSupply, priceUsd } = selectedCoin;

  // const price = String(getPrice(Number(priceUsd)));

  return (
    <div className="m-b-10">
      <img src="logo" alt="logo" />
      <div>{COIN_INFO_COLUMNS.NAME}&nbsp;{name}</div>
      <div> {COIN_INFO_COLUMNS.SYMBOL}&nbsp;{symbol}</div>
      <div>{COIN_INFO_COLUMNS.RANK}&nbsp;{rank}</div>
      <div>{COIN_INFO_COLUMNS.SUPPLY}&nbsp;{supply ?? 0}</div>
      <div>{COIN_INFO_COLUMNS.MAX_SUPPLY}&nbsp;{maxSupply ?? 0}</div>
      {/* <div>{COIN_INFO_COLUMNS.PRICE}&nbsp;{price.length === 1 ? `${price}.00` : price}</div> */}
      <div>{COIN_INFO_COLUMNS.PRICE}&nbsp;{getPrice(Number(priceUsd))}</div>
    </div>
  );
};