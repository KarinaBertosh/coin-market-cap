import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { getFormattedValue, renderIconSrc } from '../../utils/default';

const COIN_INFO_COLUMNS = {
  NAME: 'Name: ',
  LOGO: 'Logo: ',
  SYMBOL: 'Symbol: ',
  RANK: 'Rank: ',
  SUPPLY: 'Supply: ',
  MAX_SUPPLY: 'Max supply: ',
  PRICE: 'Price(usd): '
};

export const CoinInfo = () => {
  const { selectedCoin } = useAppSelector((state) => state.assets);
  const { symbol, rank, supply, maxSupply, priceUsd, name } = selectedCoin;

  return (
    <>
      {
        selectedCoin &&
        <div className="m-b-10">
          <div className="coin-name">{COIN_INFO_COLUMNS.NAME}&nbsp;{name}</div>
          <div className="coin-name">{COIN_INFO_COLUMNS.LOGO}&nbsp;
            <img
              width="15"
              src={renderIconSrc(symbol)}
              alt={symbol} />
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