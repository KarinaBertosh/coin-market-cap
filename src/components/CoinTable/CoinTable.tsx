import React, { useEffect } from 'react';
import { Table } from "antd";
import { columns } from '../../utils/constants';
import { getPrice } from '../../utils/default';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setTableData } from '../../store/slices/assets';
import { fetchAssets } from '../../api/assets';

export const CoinTable = () => {
  const dispatch = useAppDispatch();
  const { tableData, isLoading } = useAppSelector((state) => state.assets);

  useEffect(() => {
    (async () => {
      try {
        const assets = await dispatch(fetchAssets()).unwrap();
        const data = assets.map((asset: any) => (
          {
            key: asset.id,
            add: 'x',
            symbol: asset.symbol,
            logo: asset.symbol,
            priceUsd: `$ ${getPrice(asset.priceUsd)}`,
            marketCapUsd: `$ ${getPrice(asset.marketCapUsd)}`,
            volumeUsd24Hr: `$ ${getPrice(asset.volumeUsd24Hr)}`,
          }
        ));
        dispatch(setTableData(data));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);


  return (
    <Table dataSource={tableData} columns={columns} loading={isLoading} />
  );
};