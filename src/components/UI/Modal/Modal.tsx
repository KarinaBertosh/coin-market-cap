import React from 'react';
import { Modal as ModalWindow } from 'antd';

interface IModalProps {
  isModalOpen: boolean,
  setIsModalOpen: (isModalOpen: boolean) => void,
  title: string,
  children: any;
}

export const Modal = (props: IModalProps) => {
  const { isModalOpen, setIsModalOpen, title, children } = props;

  return (
    <ModalWindow
      title={title}
      open={isModalOpen}
      footer=""
      onCancel={() => setIsModalOpen(false)}
    >
      {children}
    </ModalWindow >
  );
};