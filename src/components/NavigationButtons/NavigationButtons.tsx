import React, { useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';
import { ICoinRow } from '../../utils/types';
import { Button } from '../UI/Button/Button';
import { Modal } from '../UI/Modal/Modal';
import { InputAddCoin } from '../InputAddCoin/InputAddCoin ';

interface INavigationButtonsProps {
  coin: ICoinRow,
}

export const NavigationButtons = ({ coin }: INavigationButtonsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { selectedCoin } = useAppSelector((state) => state.assets);


  return (
    <div className="m-b-10">
      <Button className="m-r-10" onClick={() => navigate(ROUTES.MAIN)} buttonName='Back' />
      {
        selectedCoin
          ? <>
            <Button onClick={() => setIsModalOpen(true)} buttonName='Add' />
            <Modal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              title='Please select number of coins'
            >
              <InputAddCoin coin={coin} />
            </Modal>
          </>
          : <h1>Go to the main page to pick up your coin</h1>
      }
    </div>
  );
};