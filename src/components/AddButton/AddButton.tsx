import React, { useState } from 'react';
import { ICoinRow } from '../../utils/types';
import { ModalAddCoin } from '../ModalAddCoin/ModalAddCoin';
import { Button } from '../UI/Button/Button';

interface IAddButtonProps {
  coin: ICoinRow,
  buttonName: string;
}

export const AddButton = (props: IAddButtonProps) => {
  const [isOpenModal, setIsModalOpen] = useState(false);
  const { coin, buttonName } = props;

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} buttonName={buttonName} />
      <ModalAddCoin isModalOpen={isOpenModal} setIsModalOpen={setIsModalOpen} coin={coin} />
    </>
  );
};