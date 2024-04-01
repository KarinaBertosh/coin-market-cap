import React from 'react';
import { Button } from 'antd';
import { setPortfolioCoins } from '../../store/slices/assets';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getPrice, getTotalValue } from '../../utils/default';
import { IRowData } from '../../utils/types';


interface IDeleteButtonProps {
  record: any,
  value: string;
}

export const DeleteButton = (props: IDeleteButtonProps) => {
  const dispatch = useAppDispatch();
  const { record, value } = props;
  const { portfolioCoins } = useAppSelector((state) => state.assets);

  const deleteCoinInPortfolio = (coin: IRowData) => {
    const result: IRowData[] = [...portfolioCoins].filter((c) => c.key !== coin.key);

    dispatch(setPortfolioCoins(result));

    // const portfolioDifferenceCost = getPrice(String(portfolioCoins
    //   ? getTotalValue(result) - getTotalValue([...portfolioCoins])
    //   : 0));
    // const portfolioDifferenceCostPercent = getTotalValue(portfolioCoins) ? getPrice(String(
    //   (getTotalValue([...portfolioCoins]) / getTotalValue(result) - 1) * 100
    // )) : 100;
    // dispatch(setPortfolioDifferenceCost(portfolioDifferenceCost));
    // dispatch(setPortfolioDifferencePercent(portfolioDifferenceCostPercent));
  };

  return (
    <Button onClick={() => deleteCoinInPortfolio(record)}>{value}</Button>
  );
};