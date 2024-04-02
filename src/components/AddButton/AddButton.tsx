import React, { useState } from 'react';
import { Button } from 'antd';
import { ICoinRow } from '../../utils/types';
import { Modal } from '../Modal/Modal';


interface IAddButtonProps {
  coin: ICoinRow,
  value: string;
}

export const AddButton = (props: IAddButtonProps) => {
  const [isOpenModal, setIsModalOpen] = useState(false);
  const { coin, value } = props;

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>
        {value}
      </Button>
      <Modal isModalOpen={isOpenModal} setIsModalOpen={setIsModalOpen} coin={coin} />
    </>
  );
};