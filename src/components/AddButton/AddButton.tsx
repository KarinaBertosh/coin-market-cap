import React, { useState } from 'react';
import { ICoinRow } from '../../utils/types';
import { Button } from '../UI/Button/Button';
import { Modal } from '../UI/Modal/Modal';
import { InputAddCoin } from '../InputAddCoin/InputAddCoin';

interface IAddButtonProps {
  coin: ICoinRow,
  buttonName: string;
}

export const AddButton = ({ coin, buttonName }: IAddButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} buttonName={buttonName} />
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title='Please select number of coins'
      >
        <InputAddCoin coin={coin} />
      </Modal>
    </>
  );
};