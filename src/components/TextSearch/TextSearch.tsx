import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSearchText, setCoinsRow } from '../../store/slices/assets';
import { callApi, getCoinFromApi } from '../../utils/default';
import { SearchInput } from '../UI/SearchInput/SearchInput';
import './style.scss';


export const TextSearch = () => {
  const [isError, setIsError] = useState(false);
  const handlingCoinSearch = (e: any) => dispatch(setSearchText(e.target.value));
  const dispatch = useAppDispatch();
  const { searchText, coinsRow } = useAppSelector((state) => state.assets);

  const renderAllCoins = async () => await callApi(await getCoinFromApi(dispatch));

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
          ? dispatch(setCoinsRow([coin]))
          : renderAllCoins();
        setIsError(!coin);
      } else {
        await renderAllCoins();
      }
    })();
  }, [searchText]);

  return (
    <SearchInput
      onChange={handlingCoinSearch}
      isError={isError}
    />
  );
};