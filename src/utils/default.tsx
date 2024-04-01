import { fetchAssets } from "../api/assets";
import { setDefaultTableData, setTableData } from "../store/slices/assets";
import { IRowData } from "./types";

export const getPrice = (price: any, numberPastComma = 2) => {
  if (!price) return 0;

  const index = price.startsWith('0')
    ? price.indexOf(Array.from(price).filter((el) => el !== '0')[1]) + numberPastComma + 1
    : price.indexOf('.') + 3;

  return price.slice(0, index);
};

const getNumber = (coin: IRowData) => {
  return Number(getPrice(coin.priceUsd.slice(1)) * coin.coinsNumber);
};

export const getTotalValue = (portfolioCoins: IRowData[]) => portfolioCoins.reduce((prev: any, cur: any) =>
  prev.priceUsd ? getNumber(prev) : prev + getNumber(cur), 0,);

export const getData = async (dispatch: any) => {
  const assets = await dispatch(fetchAssets()).unwrap();
  const data = assets.map((asset: any) => (
    {
      key: asset.id,
      add: 'Add',
      symbol: asset.symbol,
      logo: asset.symbol,
      priceUsd: `$${getPrice(asset.priceUsd)}`,
      marketCapUsd: `$${getPrice(asset.marketCapUsd)}`,
      volumeUsd24Hr: `$${getPrice(asset.volumeUsd24Hr)}`,
    }
  ));
  dispatch(setDefaultTableData(data));
  dispatch(setTableData(data));
  return data;
}

