import React, { useState } from 'react';
import { ICoinRow } from '../../utils/types';
import { BaseInput } from '../UI/BaseInput/BaseInput';
import { KEY_LS, getFormattedPriceCoins } from '../../utils/default';
import { setCoins } from '../../store/slices/assets';
import { useAppDispatch } from '../../hooks/redux';

interface IInputProps {
  coin: ICoinRow;
}

const ERRORS = {
  NUMBER: 'Error: enter the number',
  ZERO: 'Error: the number must be greater than 0'
};

export const InputAddCoin = ({ coin }: IInputProps) => {
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const dispatch = useAppDispatch();

  const addCoinInPortfolio = (number: string) => {
    setIsError(false);
    const updatedCoin = {
      ...coin,
      coinsNumber: Number(number)
    };

    const coins = localStorage.getItem(KEY_LS);
    const copyCoins: ICoinRow[] = [...coins ? JSON.parse(coins) : []];
    const coinIndex = copyCoins.findIndex((c: ICoinRow) => c.key === coin.key);
    coinIndex >= 0
      ? copyCoins[coinIndex] = {
        ...copyCoins[coinIndex],
        coinsNumber: copyCoins[coinIndex].coinsNumber + Number(number),
      }
      : copyCoins.push(updatedCoin);

    localStorage.setItem(KEY_LS, JSON.stringify(getFormattedPriceCoins(copyCoins)));
    dispatch(setCoins(getFormattedPriceCoins(JSON.parse(localStorage.getItem(KEY_LS)))));
  };

  const handlingError = (value: string) => {
    if (!Number(value)) {
      setIsError(true);
      setErrorText(Number(value) === 0
        ? ERRORS.ZERO
        : ERRORS.NUMBER
      );
    } else {
      setIsError(false);
      setErrorText('');
      addCoinInPortfolio(value);
    }
  };

  const handlingPressEnter = (e: any) => {
    handlingError(e.target.value);
  };

  return (
    <BaseInput
      handlingPressEnter={handlingPressEnter}
      isError={isError}
      errorText={errorText}
    />
  );
};