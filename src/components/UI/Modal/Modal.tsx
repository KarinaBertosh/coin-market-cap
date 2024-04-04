import React from 'react';
import { Modal as ModalWindow } from 'antd';

interface IModalProps {
  isModalOpen: boolean,
  setIsModalOpen: (isModalOpen: boolean) => void,
  title: string,
  children: any;
}

export const Modal = ({ isModalOpen, setIsModalOpen, title, children }: IModalProps) => {
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