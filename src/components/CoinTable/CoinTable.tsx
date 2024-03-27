import React, { useEffect } from 'react';
import { Table } from "antd";
import { columns } from '../../utils/constants';
import { fetchAssets, getPrice } from '../../utils/default';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setTableData } from '../../../store/slices/assets';

export const CoinTable = () => {
  const dispatch = useAppDispatch();
  const { tableData } = useAppSelector((state) => state.assets);

  useEffect(() => {
    (async () => {
      const assets = await fetchAssets();
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
    })();
  }, []);

  return (
    <Table dataSource={tableData} columns={columns} />
  );
};