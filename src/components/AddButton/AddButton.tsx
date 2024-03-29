import React from 'react';
import { Button } from 'antd';
import { setPortfolioCoins, setPortfolioDifferenceCost, setPortfolioDifferencePercent } from '../../store/slices/assets';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getPrice, getTotalValue } from '../../utils/default';
import { IRowData } from '../../utils/types';


interface IAddButtonProps {
  record: IRowData,
  value: string;
}

export const AddButton = (props: IAddButtonProps) => {
  const dispatch = useAppDispatch();
  const { record, value } = props;
  const { portfolioCoins } = useAppSelector((state) => state.assets);


  const addCoinInPortfolio = () => {
    if (portfolioCoins.length) {
      const result: IRowData[] = [...portfolioCoins];
      const foundIndexCoin = portfolioCoins.findIndex((c: IRowData) => c.key === record.key);
      if (foundIndexCoin >= 0) {
        result[foundIndexCoin] = {
          ...result[foundIndexCoin],
          priceUsd: `$${Number(getPrice(result[foundIndexCoin].priceUsd.slice(1))) + Number(getPrice(record.priceUsd.slice(1)))}`
        };
      } else {
        result.push(record);
      }

      dispatch(setPortfolioCoins(result));
      
    } else {
      dispatch(setPortfolioCoins([record]));
    }

    const portfolioDifferenceCost = getPrice(String(portfolioCoins
      ? getTotalValue([...portfolioCoins, record]) - getTotalValue(portfolioCoins)
      : 0));
    const portfolioDifferenceCostPercent = getTotalValue(portfolioCoins) ? getPrice(String(
      (getTotalValue([...portfolioCoins, record]) / getTotalValue(portfolioCoins) - 1) * 100
    )) : 100;
    dispatch(setPortfolioDifferenceCost(`+${portfolioDifferenceCost}`));
    dispatch(setPortfolioDifferencePercent(portfolioDifferenceCostPercent));
  };

  return (
    <Button onClick={() => addCoinInPortfolio()}>{value}</Button>
  );
};