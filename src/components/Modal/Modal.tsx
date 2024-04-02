import React from 'react';
import { Modal as ModalWindow } from 'antd';
import { useAppSelector } from '../../hooks/redux';
import { ICoinRow } from '../../utils/types';
import { DeleteButton } from '../DeleteButton/DeleteButton';
import { getPrice } from '../../utils/default';
import { Input } from '../Input/Input';
import './style.scss';

interface IModalProps {
  isModalOpen: boolean,
  setIsModalOpen: (isModalOpen: boolean) => void;
  coin: ICoinRow;
}

export const Modal = (props: IModalProps) => {
  const { isModalOpen, setIsModalOpen } = props;

  return (
    <ModalWindow
      title="Please select number of coins"
      open={isModalOpen}
      footer=""
      onCancel={() => setIsModalOpen(false)}
    >
      <Input coin={props.coin} />
    </ModalWindow >
  );
};