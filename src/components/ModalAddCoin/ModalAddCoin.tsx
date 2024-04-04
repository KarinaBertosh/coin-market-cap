import React from 'react';
import { ICoinRow } from '../../utils/types';
import { InputAddCoin } from '../InputAddCoin/InputAddCoin ';
import { Modal } from '../UI/Modal/Modal';
import './style.scss';

interface IModalAddCoinProps {
  isModalOpen: boolean,
  setIsModalOpen: (isModalOpen: boolean) => void;
  coin: ICoinRow;
}

export const ModalAddCoin = (props: IModalAddCoinProps) => {
  const { isModalOpen, setIsModalOpen } = props;

  return (
    <Modal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      title='Please select number of coins'
    >
      <InputAddCoin coin={props.coin} />
    </Modal>
  );
};