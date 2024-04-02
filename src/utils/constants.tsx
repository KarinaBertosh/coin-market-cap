import React from 'react';
import { ICoinRow } from "./types";
import { AddButton } from '../components/AddButton/AddButton';


export const columns: any = [
    {
        dataIndex: 'add',
        key: 'add',
        onCell: () => ({ onClick: (e: any) => e.stopPropagation() }),
        render: (value: any, record: any) =>
            <AddButton coin={record} value={value} />
        ,
        width: 100
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
    },
    {
        title: 'Price',
        dataIndex: 'priceUsd',
        key: 'priceUsd',
        sorter: (a: ICoinRow, b: ICoinRow) => Number(a.priceUsd.slice(2)) - Number(b.priceUsd.slice(2)),
    },
    {
        title: 'Market Cap',
        dataIndex: 'marketCapUsd',
        key: 'marketCapUsd',
        sorter: (a: ICoinRow, b: ICoinRow) => Number(a.marketCapUsd.slice(2)) - Number(b.marketCapUsd.slice(2)),
    },
    {
        title: 'Volume (24h)',
        dataIndex: 'volumeUsd24Hr',
        key: 'volumeUsd24Hr',
        sorter: (a: ICoinRow, b: ICoinRow) => Number(a.volumeUsd24Hr.slice(2)) - Number(b.volumeUsd24Hr.slice(2)),
    },
];