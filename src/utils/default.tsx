import { fetchAssets } from "../api/assets";
import { setCoinsRow } from "../store/slices/assets";
import { ICoinRow } from "./types";

export const getPrice = (price: number, numberPastComma = 2, isPrice = false) => {
  if (!price) return 0;

  const priceString = String(price);
  const formatter = new Intl.NumberFormat('en-US');

  const index = priceString.startsWith('0')
    ? priceString.indexOf(Array.from(priceString).filter((el) => el !== '0')[1]) + numberPastComma + 1
    : priceString.indexOf('.') + 3;

  const changedPrice = Number(String(price).slice(0, index));
  return isPrice ? formatter.format(changedPrice) : changedPrice;
};

const getOneCoinTotalPrice = (coin: ICoinRow) =>
  Number(getPrice(Number(coin?.priceUsd?.slice(1)))) * coin.coinsNumber;

export const getCoinsTotalValue = (coins: ICoinRow[]) => coins.reduce((acc: any, cur: ICoinRow) =>
  acc.priceUsd ? getOneCoinTotalPrice(acc) : acc + getOneCoinTotalPrice(cur), 0,);

export const getCoinFromApi = async (dispatch: any) => {
  const assets = await dispatch(fetchAssets()).unwrap();
  const coins = assets.map((asset: any) => (
    {
      key: asset.id,
      add: 'Add',
      symbol: asset.symbol,
      logo: asset.symbol,
      priceUsd: `$${getPrice(asset.priceUsd, 2, true)}`,
      marketCapUsd: `$${getPrice(asset.marketCapUsd)}`,
      volumeUsd24Hr: `$${getPrice(asset.volumeUsd24Hr)}`,
    }
  ));
  dispatch(setCoinsRow(coins));
  return coins;
};

export const callApi = async (action: any) => {
  try {
    return await action();
  } catch (error) {
    console.log(error);
  }
};

export const getTotalAmount = (portfolioCoins: ICoinRow[]) => {
  if (!portfolioCoins.length) return `0 USD`;
  const totalAmount = getPrice(getCoinsTotalValue(portfolioCoins));
  return `${totalAmount} USD`;
};




