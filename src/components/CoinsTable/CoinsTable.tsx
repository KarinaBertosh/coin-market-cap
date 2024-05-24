import React from 'react';
import { Table } from "antd";
import { ROUTES, columns } from '../../utils/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSelectedCoin, } from '../../store/slices/assets';
import { TextSearch } from '../TextSearch/TextSearch';
import { IAsset, ICoinRow } from '../../utils/types';
import { useNavigate } from "react-router-dom";


export const CoinsTable = () => {
  const { assets, coinsRow, isLoading } = useAppSelector((state) => state.assets);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const goToCoinInfoPage = (coinKey: string) => {
    const selectedCoin = assets.find((asset: IAsset) => asset.id === coinKey);
    dispatch(setSelectedCoin(selectedCoin));
    navigate(ROUTES.INFO);
  };

  const rowClickHandling = (coinRow: ICoinRow) => ({
    onClick: () => goToCoinInfoPage(coinRow.key)
  });

  return (
    <div data-testid="coins-table">
      <TextSearch />
      <Table dataSource={coinsRow} columns={columns} loading={isLoading} onRow={rowClickHandling} />
    </div>
  );
};