import React, { useState } from 'react';
import { Input as InputNumber } from 'antd';
import { ICoinRow } from '../../utils/types';
import useLocalStorageState from 'use-local-storage-state';

interface IInputProps {
  coin: ICoinRow;
}

export const InputAddCoin = (props: IInputProps) => {
  const { coin } = props;
  const [coins, setCoins] = useLocalStorageState<string>('coins');
  const [isError, setIsError] = useState(false);
  const errorText = 'Error: Enter the number, the number must be greater than 0';

  const addCoinInPortfolio = (number: string) => {
    setIsError(false);
    const updatedCoin = {
      ...coin,
      coinsNumber: Number(number)
    };

    const copyCoins: ICoinRow[] = [...coins ? JSON.parse(coins) : []];
    const coinIndex = copyCoins.findIndex((c: ICoinRow) => c.key === coin.key);
    coinIndex >= 0
      ? copyCoins[coinIndex] = {
        ...copyCoins[coinIndex],
        coinsNumber: copyCoins[coinIndex].coinsNumber + Number(number)
      }
      : copyCoins.push(updatedCoin);
    setCoins(JSON.stringify(copyCoins));
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