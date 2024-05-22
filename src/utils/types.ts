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
export interface ICoinRow {
    add: string;
    key: string;
    marketCapUsd: string;
    priceUsd: string;
    name: string;
    volumeUsd24Hr: string;
    coinsNumber?: number;
}