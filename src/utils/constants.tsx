import React from 'react';
import { ICoinRow } from "./types";
import { AddButton } from '../components/AddButton/AddButton';
import { getSortedColumn, renderIconSrc } from './default';


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
    render: (logo: any) => {
      return <img
        width="50"
        src={renderIconSrc(logo)}
        alt={logo} />;
    }
  },
  {
    title: 'Price',
    dataIndex: 'priceUsd',
    key: 'priceUsd',
    sorter: (a: ICoinRow, b: ICoinRow) => getSortedColumn(a, b)
  },
  {
    title: 'Market Cap',
    dataIndex: 'marketCapUsd',
    key: 'marketCapUsd',
    sorter: (a: ICoinRow, b: ICoinRow) => getSortedColumn(a, b)
  },
  {
    title: 'Volume (24h)',
    dataIndex: 'volumeUsd24Hr',
    key: 'volumeUsd24Hr',
    sorter: (a: ICoinRow, b: ICoinRow) => getSortedColumn(a, b)
  },
];

export const ROUTES = {
  ERROR: "*",
  MAIN: '/',
  INFO: '/info'
};

