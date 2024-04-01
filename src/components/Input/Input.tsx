import React, { useState } from 'react';
import { Input as InputNumber } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IRowData } from '../../utils/types';
import { getPrice, getTotalValue } from '../../utils/default';
import { setPortfolioCoins } from '../../store/slices/assets';

interface IInputProps {
  coin: IRowData;
}

export const Input = (props: IInputProps) => {
  const [isError, setIsError] = useState(false);
  const dispatch = useAppDispatch();
  const { portfolioCoins } = useAppSelector((state) => state.assets);

  const addCoinInPortfolio = (number: string) => {
    setIsError(false);

    const updatedCoin = {
      ...props.coin,
      coinsNumber: Number(number)
    };

    if (portfolioCoins.length) {
      const result: IRowData[] = [...portfolioCoins];
      const foundIndexCoin = result.findIndex((c: IRowData) => c.key === props.coin.key);

      foundIndexCoin >= 0
        ? result[foundIndexCoin] = {
          ...result[foundIndexCoin],
          coinsNumber: Number(result[foundIndexCoin].coinsNumber) + Number(number)
        }
        : result.push(updatedCoin);

      dispatch(setPortfolioCoins(result));

    } else {
      dispatch(setPortfolioCoins([updatedCoin]));
    }
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