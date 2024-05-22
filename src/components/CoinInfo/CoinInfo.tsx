import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { getFormattedValue } from '../../utils/default';
import '../../style.scss'

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

  return (
    <>
      {
        selectedCoin &&
        <div className="m-b-10">
          <div className='coin-name'>
          {COIN_INFO_COLUMNS.NAME}&nbsp;
            <img width="15" src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`} alt={symbol} /> 
            {name}
            </div>
          <div>{COIN_INFO_COLUMNS.SYMBOL}&nbsp;{symbol}</div>
          <div>{COIN_INFO_COLUMNS.RANK}&nbsp;{rank}</div>
          <div>{COIN_INFO_COLUMNS.SUPPLY}&nbsp;{supply ?? 0}</div>
          <div>{COIN_INFO_COLUMNS.MAX_SUPPLY}&nbsp;{maxSupply ?? 0}</div>
          <div>{COIN_INFO_COLUMNS.PRICE}&nbsp;{getFormattedValue(priceUsd, 2, true)}</div>
        </div>
      }
    </>
  );
};