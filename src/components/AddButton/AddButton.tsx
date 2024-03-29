import React from 'react';
import { Button } from 'antd';
import { setPortfolioCoins, setPortfolioDifferenceCost, setPortfolioDifferencePercent } from '../../store/slices/assets';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getPrice, getTotalValue } from '../../utils/default';
import { IRowData } from '../../utils/types';


interface IAddButtonProps {
  record: any,
  value: string;
}

export const AddButton = (props: IAddButtonProps) => {
  const dispatch = useAppDispatch();
  const { record, value } = props;
  const { portfolioCoins } = useAppSelector((state) => state.assets);

  const addCoinInPortfolio = (coin: IRowData) => {
    if (portfolioCoins.length) {
      const result: IRowData[] = [...portfolioCoins];
      const foundIndexCoin = portfolioCoins.findIndex((c: IRowData) => c.key === coin.key);
      if (foundIndexCoin >= 0) {
        result[foundIndexCoin] = {
          ...result[foundIndexCoin],
          priceUsd: `$${Number(getPrice(result[foundIndexCoin].priceUsd.slice(1))) + Number(getPrice(coin.priceUsd.slice(1)))}`
        };
      } else {
        result.push(coin);
      }
      dispatch(setPortfolioCoins(result));
    } else {
      dispatch(setPortfolioCoins([coin]));
    }

    const portfolioDifferenceCost = getPrice(String(portfolioCoins
      ? getTotalValue([...portfolioCoins, coin]) - getTotalValue(portfolioCoins)
      : 0));
    const portfolioDifferenceCostPercent = getTotalValue(portfolioCoins) ? getPrice(String(
      (getTotalValue([...portfolioCoins, coin]) / getTotalValue(portfolioCoins) - 1) * 100
    )) : 100;
    dispatch(setPortfolioDifferenceCost(`+${portfolioDifferenceCost}`));
    dispatch(setPortfolioDifferencePercent(portfolioDifferenceCostPercent));
  };

  return (
    <Button onClick={() => addCoinInPortfolio(record)}>{value}</Button>
  );
};