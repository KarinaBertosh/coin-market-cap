import React, { useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';
import { ICoinRow } from '../../utils/types';
import { Button } from '../UI/Button/Button';
import { AddButton } from '../AddButton/AddButton';

interface INavigationButtonsProps {
  coin: ICoinRow,
}

export const NavigationButtons = ({ coin }: INavigationButtonsProps) => {
  const { selectedCoin } = useAppSelector((state) => state.assets);
  const navigate = useNavigate();

  const errorText = 'Go to the main page to pick up your coin';
  const addButton = "Add";
  const backButton = "Back";

  return (
    <div className="m-b-10">
      <Button className="m-r-10" onClick={() => navigate(ROUTES.MAIN)} buttonName={backButton} />
      {
        selectedCoin
          ?
          <AddButton
            coin={coin}
            buttonName={addButton}
          />
          :
          <h1>{errorText}</h1>
      }
    </div>
  );
};