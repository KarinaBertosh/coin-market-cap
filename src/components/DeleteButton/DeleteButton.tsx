import React from 'react';
import { Button } from 'antd';
import { setPortfolioCoins } from '../../store/slices/assets';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getPrice, getCoinsTotalValue } from '../../utils/default';
import { ICoinRow } from '../../utils/types';


interface IDeleteButtonProps {
  coin: any,
  value: string;
}

export const DeleteButton = (props: IDeleteButtonProps) => {
  const dispatch = useAppDispatch();
  const { coin, value } = props;
  const { portfolioCoins } = useAppSelector((state) => state.assets);

  const deleteCoin = (coin: ICoinRow) => {
    const result: ICoinRow[] = [...portfolioCoins].filter((c) => c.key !== coin.key);

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
    <Button onClick={() => deleteCoin(coin)}>
      {value}
    </Button>
  );
};