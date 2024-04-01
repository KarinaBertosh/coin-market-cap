import React, { useState } from 'react';
import { Button } from 'antd';
import { IRowData } from '../../utils/types';
import { Modal } from '../Modal/Modal';


interface IAddButtonProps {
  record: IRowData,
  value: string;
}

export const AddButton = (props: IAddButtonProps) => {
  const [isOpenModal, setIsModalOpen] = useState(false);
  const { record, value } = props;

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>
        {value}
      </Button>
      <Modal isModalOpen={isOpenModal} setIsModalOpen={setIsModalOpen} coin={record} />
    </>
  );
};