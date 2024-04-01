export interface IColumn {
    key: React.Key;
    title?: string,
    dataIndex: string,
    sorter?: (a: any, b: any) => number,
    sortDirections?: any;
}

export interface IAsset {
    id: string,
    rank: string,
    symbol: string,
    name: string,
    supply: string,
    maxSupply: any,
    marketCapUsd: string,
    volumeUsd24Hr: string,
    priceUsd: string,
    changePercent24Hr: string,
    vwap24Hr: string,
    explorer: string;

}

export interface IRowData {
    add: string;
    key: string;
    logo: string;
    marketCapUsd: string;
    priceUsd: string;
    symbol: string;
    volumeUsd24Hr: string;
    coinsNumber?: number;
}