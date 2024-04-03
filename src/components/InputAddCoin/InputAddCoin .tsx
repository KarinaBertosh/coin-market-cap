import React, { useState } from 'react';
import { Input as InputNumber } from 'antd';
import { ICoinRow } from '../../utils/types';
import { KEY } from '../../utils/constants';

interface IInputProps {
  coin: ICoinRow;
}

export const InputAddCoin = (props: IInputProps) => {
  const { coin } = props;
  const [isError, setIsError] = useState(false);
  const errorText = 'Error: Enter the number, the number must be greater than 0';

  const getPortfolioCoins = () => localStorage[KEY] ? JSON.parse(localStorage[KEY]) : [];

  const addCoinsInLS = (coins: ICoinRow[]) => {
    getPortfolioCoins().length
      ? localStorage[KEY] = JSON.stringify(coins)
      : localStorage.setItem(KEY, JSON.stringify(coins));
  };

  const addCoinInPortfolio = (number: string) => {
    setIsError(false);
    const updatedCoin = {
      ...coin,
      coinsNumber: Number(number)
    };
    const coins: ICoinRow[] = [...getPortfolioCoins()];
    const coinIndex = coins.findIndex((c: ICoinRow) => c.key === coin.key);
    coinIndex >= 0
      ? coins[coinIndex] = {
        ...coins[coinIndex],
        coinsNumber: coins[coinIndex].coinsNumber + Number(number)
      }
      : coins.push(updatedCoin);
    addCoinsInLS(coins);
  };

  const handlingPressEnter = (e: any) => {
    Number(e.target.value)
      ? addCoinInPortfolio(e.target.value)
      : setIsError(true);
  };

  return (
    <>
      <InputNumber
        defaultValue='0'
        maxLength={16}
        onPressEnter={handlingPressEnter}
      />
      {isError && <p>{errorText}</p>}
    </>
  );
};