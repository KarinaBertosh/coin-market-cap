import React from 'react';
import { Button } from 'antd';
import { ICoinRow } from '../../utils/types';
import useLocalStorageState from 'use-local-storage-state';


interface IDeleteButtonProps {
  coin: any,
  value: string;
}

export const DeleteButton = (props: IDeleteButtonProps) => {
  const { coin, value } = props;
  const [coins, setCoins] = useLocalStorageState<string>('coins');


  const deleteCoin = (coin: ICoinRow) => {
    // const updateCoins = JSON.parse(coins).filter((c: ICoinRow) => c.key !== coin.key);
    // setCoins(JSON.stringify(updateCoins));
  };

  return (
    <Button onClick={() => deleteCoin(coin)}>
      {value}
    </Button>
  );
};