import React, { useState } from 'react';
import { Input as InputNumber } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IRowData } from '../../utils/types';
import { getPrice, getTotalValue } from '../../utils/default';
import { setPortfolioCoins, setPortfolioDifferenceCost, setPortfolioDifferencePercent } from '../../store/slices/assets';

interface IInputProps {
  coin: IRowData;
}

export const Input = (props: IInputProps) => {
  const [isError, setIsError] = useState(false);
  const dispatch = useAppDispatch();
  const { portfolioCoins } = useAppSelector((state) => state.assets);

  const addCoinInPortfolio = (number: number) => {
    setIsError(false);

    const updatedCoin = {
      ...props.coin,
      priceUsd: `$${Number(getPrice(props.coin.priceUsd.slice(1))) * number}`
    };

    if (portfolioCoins.length) {
      const result: IRowData[] = [...portfolioCoins];
      const foundIndexCoin = result.findIndex((c: IRowData) => c.key === props.coin.key);
      console.log({ foundIndexCoin });
      if (foundIndexCoin >= 0) {
        result[foundIndexCoin] = {
          ...result[foundIndexCoin],
          priceUsd: `$${Number(getPrice(result[foundIndexCoin].priceUsd.slice(1))) + Number(getPrice(props.coin.priceUsd.slice(1))) * number}`
        };
      } else {
        result.push(updatedCoin);
      }
      dispatch(setPortfolioCoins(result));
    } else {
      dispatch(setPortfolioCoins([updatedCoin]));
    }

    const portfolioDifferenceCost = getPrice(String(portfolioCoins
      ? getTotalValue([...portfolioCoins, updatedCoin]) - getTotalValue(portfolioCoins)
      : 0));
    const portfolioDifferenceCostPercent = getTotalValue(portfolioCoins) ? getPrice(String(
      (getTotalValue([...portfolioCoins, updatedCoin]) / getTotalValue(portfolioCoins) - 1) * 100
    )) : 100;

    dispatch(setPortfolioDifferenceCost(`+${portfolioDifferenceCost}`));
    dispatch(setPortfolioDifferencePercent(portfolioDifferenceCostPercent));
  };

  const onPressEnter = (e: any) => {
    Number(e.target.value)
      ? addCoinInPortfolio(e.target.value)
      : setIsError(true);
  };

  return (
    <>
      <InputNumber defaultValue='0' maxLength={16} onPressEnter={onPressEnter} />
      {isError && <p>Error: Enter the number, the number must be greater than 0</p>}
    </>
  );
};