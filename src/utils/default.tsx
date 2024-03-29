import { IRowData } from "./types";

export const getPrice = (price: any, numberPastComma = 2) => {
  if (!price) return 0;

  const index = price.startsWith('0')
    ? price.indexOf(Array.from(price).filter((el) => el !== '0')[1]) + numberPastComma + 1
    : price.indexOf('.') + 3;

  return price.slice(0, index);
};

const getNumber = (coin: IRowData) => {
  return Number(getPrice(coin.priceUsd.slice(1)));
};

export const getTotalValue = (portfolioCoins: IRowData[]) => portfolioCoins.reduce((prev: any, cur: any) =>
  prev.priceUsd ? getNumber(prev) : prev + getNumber(cur), 0,);

