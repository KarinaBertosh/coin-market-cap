import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSearchText, setCoinsRow } from '../../store/slices/assets';
import { getCoinsFromApi } from '../../utils/default';
import { SearchInput } from '../UI/SearchInput/SearchInput';
import './style.scss';


export const TextSearch = () => {
  const [isError, setIsError] = useState(false);
  const { searchText, coinsRow } = useAppSelector((state) => state.assets);
  const dispatch = useAppDispatch();

  const handlingCoinSearch = (e: any) => dispatch(setSearchText(e.target.value));

  const renderAllCoins = async () => {
    try {
      await getCoinsFromApi(dispatch);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      await renderAllCoins();
    })();
  }, []);

  useEffect(() => {
    const checkValueEqualToTextSearch = (key: string) => key.toLowerCase().startsWith(searchText.toLowerCase());
    (async () => {
      if (coinsRow && searchText) {
        const foundCoin = coinsRow.find((coinRow) => checkValueEqualToTextSearch(coinRow.key) || checkValueEqualToTextSearch(coinRow.symbol));
        foundCoin
          ? dispatch(setCoinsRow([foundCoin]))
          : renderAllCoins();
        setIsError(!foundCoin);
      }
      else {
        setIsError(false);
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