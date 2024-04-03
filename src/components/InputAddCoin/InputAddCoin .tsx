import React, { useState } from 'react';
import { Input as InputNumber } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ICoinRow } from '../../utils/types';
import { setPortfolioCoins } from '../../store/slices/assets';

interface IInputProps {
  coin: ICoinRow;
}

export const InputAddCoin = (props: IInputProps) => {
  const [isError, setIsError] = useState(false);
  const dispatch = useAppDispatch();
  const { portfolioCoins } = useAppSelector((state) => state.assets);

  const errorText = 'Error: Enter the number, the number must be greater than 0';
  const addCoinInPortfolio = (number: string) => {
    setIsError(false);
    const updatedCoin = {
      ...props.coin,
      coinsNumber: Number(number)
    };
    const updatePortfolioCoins = (coins: ICoinRow[]) => {
      dispatch(setPortfolioCoins(coins));
    };

    if (portfolioCoins.length) {
      const coins: ICoinRow[] = [...portfolioCoins];
      const foundedCoin = coins.findIndex((c: ICoinRow) => c.key === props.coin.key);

      foundedCoin >= 0
        ? coins[foundedCoin] = {
          ...coins[foundedCoin],
          coinsNumber: Number(coins[foundedCoin].coinsNumber) + Number(number)
        }
        : coins.push(updatedCoin);
      updatePortfolioCoins(coins);
    } else {
      updatePortfolioCoins([updatedCoin]);
    }
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