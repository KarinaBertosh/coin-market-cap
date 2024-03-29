import React from 'react';
import { Button } from 'antd';
import { setPortfolioCoins, setPortfolioDifferenceCost, setPortfolioDifferencePercent } from '../../store/slices/assets';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getPrice, getTotalValue } from '../../utils/default';


interface IDeleteButtonProps {
  record: any,
  value: string;
}

export const DeleteButton = (props: IDeleteButtonProps) => {
  const dispatch = useAppDispatch();
  const { record, value } = props;
  const { portfolioCoins } = useAppSelector((state) => state.assets);

  // const addCoinInPortfolio = (coin: string) => {
  //   const portfolioDifferenceCost = getPrice(String(portfolioCoins
  //     ? getTotalValue([...portfolioCoins, coin]) - getTotalValue(portfolioCoins)
  //     : 0));

  //   const portfolioDifferenceCostPercent = getTotalValue(portfolioCoins) ? getPrice(String(
  //     (getTotalValue([...portfolioCoins, coin]) / getTotalValue(portfolioCoins) - 1) * 100
  //   )) : 100;


  //   dispatch(setPortfolioDifferenceCost(portfolioDifferenceCost));
  //   dispatch(setPortfolioDifferencePercent(portfolioDifferenceCostPercent));

  //   dispatch(setPortfolioCoins(
  //     portfolioCoins.length
  //       ? [...portfolioCoins, coin]
  //       : [coin]));
  // };

  return (
    // <Button onClick={() => addCoinInPortfolio(record)}>{value}</Button>
    <Button>{value}</Button>
  );
};