import React from 'react';
import { ICoinRow } from "./types";
import { AddButton } from '../components/AddButton/AddButton';
import '../style.scss';

export const columns = [
  {
    dataIndex: 'add',
    key: 'add',
    onCell: () => ({ onClick: (e: any) => e.stopPropagation() }),
    render: (value: string, coin: ICoinRow) =>
      <AddButton coin={coin} buttonName={value} />
    ,
  },
  {
    title: 'Symbol',
    dataIndex: 'symbol',
    key: 'symbol',
  },
  {
    title: 'Logo',
    dataIndex: 'logo',
    key: 'logo',
    render: (symbol: any) =>
      <img
        width="50"
        alt={symbol}
        src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`} />
  },
  {
    title: 'Price',
    dataIndex: 'priceUsd',
    key: 'priceUsd',
    sorter: (a: ICoinRow, b: ICoinRow) =>
      Number(b.priceUsd.slice(1).replace(/[\s,%]/g, '')) - Number(a.priceUsd.slice(1).replace(/[\s,%]/g, ''))

  },
  {
    title: 'Market Cap',
    dataIndex: 'marketCapUsd',
    key: 'marketCapUsd',
    sorter: (a: ICoinRow, b: ICoinRow) =>
      Number(b.marketCapUsd.slice(1).replace(/[\s,%]/g, '')) - Number(a.marketCapUsd.slice(1).replace(/[\s,%]/g, ''))
  },
  {
    title: 'Volume (24h)',
    dataIndex: 'volumeUsd24Hr',
    key: 'volumeUsd24Hr',
    sorter: (a: ICoinRow, b: ICoinRow) =>
      Number(b.volumeUsd24Hr.slice(1).replace(/[\s,%]/g, '')) - Number(a.volumeUsd24Hr.slice(1).replace(/[\s,%]/g, ''))
  },
];

export const ROUTES = {
  ERROR: "*",
  MAIN: '/',
  INFO: '/info'
};

