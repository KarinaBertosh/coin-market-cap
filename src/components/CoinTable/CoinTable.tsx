import React, { useEffect } from 'react';
import { Table } from "antd";
import { columns } from '../../utils/constants';
import { getPrice } from '../../utils/default';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setDefaultTableData, setIsInputTextError, setTableData } from '../../store/slices/assets';
import { fetchAssets } from '../../api/assets';
import { SearchInput } from '../SearchInput/SearchInput';
import { IRowData } from '../../utils/types';

export const CoinTable = () => {
  const dispatch = useAppDispatch();
  const { defaultTableData, tableData, isLoading, inputText } = useAppSelector((state) => state.assets);

  useEffect(() => {
    (async () => {
      try {
        const assets = await dispatch(fetchAssets()).unwrap();
        const data = assets.map((asset: any) => (
          {
            key: asset.id,
            add: 'Add',
            symbol: asset.symbol,
            logo: asset.symbol,
            priceUsd: `$ ${getPrice(asset.priceUsd)}`,
            marketCapUsd: `$ ${getPrice(asset.marketCapUsd)}`,
            volumeUsd24Hr: `$ ${getPrice(asset.volumeUsd24Hr)}`,
          }
        ));
        dispatch(setDefaultTableData(data));
        dispatch(setTableData(data));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const foundCoin = defaultTableData.find((coin: IRowData) => coin.key.toLowerCase() === inputText.toLowerCase() || coin.symbol.toLowerCase() === inputText.toLowerCase());
        dispatch(setTableData(foundCoin ? [foundCoin] : defaultTableData));
        dispatch(setIsInputTextError(!!foundCoin || !inputText ? false : true));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [inputText]);


  return (
    <>
      <SearchInput />
      <Table dataSource={tableData} columns={columns} loading={isLoading} />
    </>
  );
};