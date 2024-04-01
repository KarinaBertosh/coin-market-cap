import React, { useEffect } from 'react';
import { Table } from "antd";
import { columns } from '../../utils/constants';
import { getData } from '../../utils/default';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSelectedCoin, } from '../../store/slices/assets';
import { TextSearch } from '../TextSearch/TextSearch';
import { IAsset, IRowData } from '../../utils/types';
import { useNavigate } from "react-router-dom";

export const CoinTable = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { assets, tableData, isLoading, inputText } = useAppSelector((state) => state.assets);

  useEffect(() => {
    (async () => {
      try {
        await getData(dispatch);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const onClick = (key: string) => {
    const selectedCoin = assets.find((asset: IAsset) => asset.id === key);
    dispatch(setSelectedCoin(selectedCoin));
    navigate('/info');
  };

  const onRow = (record: IRowData) => ({
    onClick: () => onClick(record.key)
  });

  return (
    <>
      <TextSearch />
      <Table dataSource={tableData} columns={columns} loading={isLoading} onRow={onRow} />
    </>
  );
};