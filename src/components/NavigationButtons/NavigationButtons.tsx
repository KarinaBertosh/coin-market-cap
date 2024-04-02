import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AddButton } from '../AddButton/AddButton';

interface INavigationButtonsProps {
  coin: any,
}

export const NavigationButtons = ({ coin }: INavigationButtonsProps) => {
  const navigate = useNavigate();
  const { selectedCoin } = useAppSelector((state) => state.assets);

  return (
    <div className="m-b-10">
      <Button className="m-r-10" onClick={() => navigate('/')}>Back</Button>
      {
        selectedCoin
          ? <AddButton coin={coin} value={"Add"} />
          : <h1>Go to the main page to pick up your coin</h1>
      }
    </div>
  );
};