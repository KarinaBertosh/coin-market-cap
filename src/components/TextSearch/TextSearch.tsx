import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSearchText, setTableData } from '../../store/slices/assets';
import { callApi, getData } from '../../utils/default';
import './style.scss';


export const TextSearch = () => {
  const [isError, setIsError] = useState(false);
  const handlingCoinSearch = (e: any) => dispatch(setSearchText(e.target.value));
  const dispatch = useAppDispatch();
  const { searchText, coinsRow } = useAppSelector((state) => state.assets);

  const renderAllCoins = async () => await callApi(await getData(dispatch));

  useEffect(() => {
    (async () => {
      await renderAllCoins();
    })();
  }, []);

  useEffect(() => {
    const isCoinFound = (key: string) => key.toLowerCase().startsWith(searchText.toLowerCase());
    (async () => {
      if (coinsRow && searchText) {
        const coin = coinsRow.find((coinRow) => isCoinFound(coinRow.key) || isCoinFound(coinRow.symbol));
        coin
          ? dispatch(setTableData([coin]))
          : renderAllCoins();
        setIsError(!coin);
      } else {
        await renderAllCoins();
      }
    })();
  }, [searchText]);

  return (
    <div className="text-search">
      <Input.Search
        placeholder="input search text"
        onChange={handlingCoinSearch}
        enterButton
      />
      {
        isError &&
        <div>There is no such coin</div>
      }
    </div>
  );
};