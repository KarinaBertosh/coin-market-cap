import React, { useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
// import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
// import { AddButton } from '../AddButton/AddButton';
import { ROUTES } from '../../utils/constants';
import { ICoinRow } from '../../utils/types';
import { ModalAddCoin } from '../ModalAddCoin/ModalAddCoin';
import { Button } from '../UI/Button/Button';

interface INavigationButtonsProps {
  coin: ICoinRow,
}

export const NavigationButtons = ({ coin }: INavigationButtonsProps) => {
  const [isOpenModal, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { selectedCoin } = useAppSelector((state) => state.assets);
  

  return (
    <div className="m-b-10">
      <Button className="m-r-10" onClick={() => navigate(ROUTES.MAIN)} buttonName='Back' />
      {
        selectedCoin
          ? <>
            <Button onClick={() => setIsModalOpen(true)} buttonName='Add' />
            <ModalAddCoin isModalOpen={isOpenModal} setIsModalOpen={setIsModalOpen} coin={coin} />
          </>
          : <h1>Go to the main page to pick up your coin</h1>
      }
    </div>
  );
};