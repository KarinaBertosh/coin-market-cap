import { IAssets, IColumn } from "./types";

export const columns: IColumn[] = [
    {
        dataIndex: 'add',
        key: 'add',
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
        sorter: (a: IAssets, b: IAssets) => Number(a.priceUsd.slice(2)) - Number(b.priceUsd.slice(2)),
    },
    {
        title: 'Market Cap',
        dataIndex: 'marketCapUsd',
        key: 'marketCapUsd',
        sorter: (a: IAssets, b: IAssets) => Number(a.marketCapUsd.slice(2)) - Number(b.marketCapUsd.slice(2)),
    },
    {
        title: 'Volume (24h)',
        dataIndex: 'volumeUsd24Hr',
        key: 'volumeUsd24Hr',
        sorter: (a: IAssets, b: IAssets) => Number(a.volumeUsd24Hr.slice(2)) - Number(b.volumeUsd24Hr.slice(2)),
    },
]