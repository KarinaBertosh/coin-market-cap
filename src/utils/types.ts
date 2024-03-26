export interface IColumn {
    key: React.Key;
    title?: string,
    dataIndex: string,
    sorter?: (a: any, b: any) => number,
    sortDirections?: any;
}

export interface IAssets {
    add: string;
    key: string;
    logo: string;
    marketCapUsd: string;
    priceUsd: string;
    symbol: string;
    volumeUsd24Hr: string;
}