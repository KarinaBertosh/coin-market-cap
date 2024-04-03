import React from 'react';
import { Table } from "antd";
import { ROUTES, columns } from '../../utils/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSelectedCoin, } from '../../store/slices/assets';
import { TextSearch } from '../TextSearch/TextSearch';
import { IAsset, ICoinRow } from '../../utils/types';
import { useNavigate } from "react-router-dom";
import { getPrice } from '../../utils/default';

export const CoinsTable = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { assets, coinsRow, isLoading } = useAppSelector((state) => state.assets);

  // const copyCoinsRow = coinsRow.map((coinRow: ICoinRow) => (
  //   {
  //     ...coinRow,
  //     priceUsd: `$${getPrice(Number(coinRow.priceUsd.slice(1)), 2, true)}`
  //   }
  // ));

  const onClick = (coinKey: string) => {
    const selectedCoin = assets.find((asset: IAsset) => asset.id === coinKey);
    dispatch(setSelectedCoin(selectedCoin));
    navigate(ROUTES.INFO);
  };

  const onRow = (coinRow: ICoinRow) => ({
    onClick: () => onClick(coinRow.key)
  });

  return (
    <>
      <TextSearch />
      <Table dataSource={coinsRow} columns={columns} loading={isLoading} onRow={onRow} />
    </>
  );
};;