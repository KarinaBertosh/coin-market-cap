import { fetchAssets } from "../api/assets";
import { setCoinsRow } from "../store/slices/assets";
import { IAsset, ICoinRow } from "./types";


const getPriceWithoutDash = (price: string) => price.startsWith('-') ? price.slice(1) : price;

export const getFormattedValue = (value: string | number, numberPastComma = 2, isPrice = false) => {
  if (!value) return 0;
  const priceByString = getPriceWithoutDash(String(value));
  const formatter = new Intl.NumberFormat('en-US');

  const getNonZeroValueSecondIndex = (price: string) => price.indexOf(Array.from(price).find((el) => el !== '0' && el !== '.')) + numberPastComma;
  const geSecondIndexAfterPoint = (price: string) => price.indexOf('.') !== -1 ? price.indexOf('.') + 3 : price.length - 1;

  const secondIndexAfterPoint = priceByString.startsWith('0')
    ? getNonZeroValueSecondIndex(priceByString)
    : geSecondIndexAfterPoint(priceByString);


  const changedPrice = parseFloat(priceByString.slice(0, priceByString[secondIndexAfterPoint] === '0' ? secondIndexAfterPoint + 1 : secondIndexAfterPoint));

  return isPrice && !priceByString.startsWith('0') ? formatter.format(changedPrice) : changedPrice;
};

const getCoinTotalPrice = (coin: ICoinRow) =>
  Number(getFormattedValue(coin?.priceUsd?.slice(1))) * coin.coinsNumber;

export const getCoinsTotalPrice = (coins: ICoinRow[]) => coins.reduce((acc: any, cur: ICoinRow) =>
  acc + getCoinTotalPrice(cur), 0,);

export const getCoinsFromApi = async (dispatch: any) => {
  const assets = await dispatch(fetchAssets()).unwrap();
  const coins = assets.map((asset: IAsset) => (
    {
      key: asset.id,
      add: 'Add',
      logo: asset.symbol,
      symbol: asset.symbol,
      priceUsd: `$${getFormattedValue(asset.priceUsd, 2, true)}`,
      marketCapUsd: `$${getFormattedValue(asset.marketCapUsd)}`,
      volumeUsd24Hr: `$${getFormattedValue(asset.volumeUsd24Hr)}`,
    }
  ));
  dispatch(setCoinsRow(coins));
  return coins;
};

export const getCoinsTotalAmount = (portfolioCoins: ICoinRow[]) => {
  if (!portfolioCoins.length) return 0;
  return getFormattedValue(getCoinsTotalPrice(portfolioCoins));
};

export const renderPriceWithDollarAndCurrency = (value: string | number) => {
  return `$${value} USD`;
};

export const getPricesWithoutComma = (coins: ICoinRow[]) =>
  coins ?
    coins.map((coin: ICoinRow) => ({
      ...coin,
      priceUsd: coin.priceUsd.replace(',', '')
    })) : [];


export const getSortedValues = (valueA: ICoinRow, valueB: ICoinRow) =>
  Number(valueB.priceUsd.slice(1).replace(/[\s,%]/g, '')) - Number(valueA.priceUsd.slice(1).replace(/[\s,%]/g, ''));

export const renderIconSrc = (coinSymbol: string) => `https://assets.coincap.io/assets/icons/${coinSymbol.toLowerCase()}@2x.png`;

export const KEY_LS = 'coins'




