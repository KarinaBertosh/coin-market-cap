import { fetchAssets } from "../api/assets";
import { setCoinsRow } from "../store/slices/assets";
import { IAsset, ICoinRow } from "./types";

export const getFormattedValue = (value: string, numberPastComma = 2, isPrice = false) => {
  if (!value) return 0;

  const valueString = String(value).startsWith('-') ? String(value).slice(1) : String(value);
  const formatter = new Intl.NumberFormat('en-US');

  const index = valueString.startsWith('0')
    ? valueString.indexOf(Array.from(valueString).filter((el) => el !== '0')[1]) + numberPastComma + 1
    : valueString.indexOf('.') === -1 ? valueString.length + 1 : valueString.indexOf('.') + 3;
  const changedPrice = Number(valueString.slice(0, index));
  return isPrice ? formatter.format(changedPrice) : changedPrice;
};

const getOneCoinTotalPrice = (coin: ICoinRow) =>
  Number(getFormattedValue(coin?.priceUsd?.slice(1))) * coin.coinsNumber;

export const getAllCoinsValue = (coins: ICoinRow[]) => coins.reduce((acc: any, cur: ICoinRow) =>
  acc + getOneCoinTotalPrice(cur), 0,);

export const getCoinFromApi = async (dispatch: any) => {
  const assets = await dispatch(fetchAssets()).unwrap();
  const coins = assets.map((asset: IAsset) => (
    {
      key: asset.id,
      add: 'Add',
      symbol: asset.symbol,
      logo: asset.symbol,
      priceUsd: `$${getFormattedValue(asset.priceUsd, 2, true)}`,
      marketCapUsd: `$${getFormattedValue(asset.marketCapUsd)}`,
      volumeUsd24Hr: `$${getFormattedValue(asset.volumeUsd24Hr)}`,
    }
  ));
  dispatch(setCoinsRow(coins));
  return coins;
};

export const getTotalAmount = (portfolioCoins: ICoinRow[]) => {
  if (!portfolioCoins.length) return 0;
  return getFormattedValue(getAllCoinsValue(portfolioCoins));
};

export const renderDollarAmount = (value: string | number) => {
  return `$${value} USD`;
};

export const getFormattedPriceCoins = (coins: ICoinRow[]) =>
  coins ?
    coins.map((coin: ICoinRow) => ({
      ...coin,
      priceUsd: coin.priceUsd.replace(',', '')
    })) : [];

export const KEY_LS = 'coins'




