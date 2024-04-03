import React from 'react';
import { Modal as ModalWindow } from 'antd';
import { ICoinRow } from '../../utils/types';
import { InputAddCoin } from '../InputAddCoin/InputAddCoin ';
import './style.scss';

interface IModalProps {
  isModalOpen: boolean,
  setIsModalOpen: (isModalOpen: boolean) => void;
  coin: ICoinRow;
}

export const ModalCoinAdding = (props: IModalProps) => {
  const { isModalOpen, setIsModalOpen } = props;

  return (
    <ModalWindow
      title="Please select number of coins"
      open={isModalOpen}
      footer=""
      onCancel={() => setIsModalOpen(false)}
    >
      <InputAddCoin coin={props.coin} />
    </ModalWindow >
  );
};