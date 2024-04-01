import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AddButton } from '../AddButton/AddButton';

interface INavigationButtons {
  foundSelectedCoin: any,
}

export const NavigationButtons = ({ foundSelectedCoin }: INavigationButtons) => {
  const navigate = useNavigate();
  const { selectedCoin } = useAppSelector((state) => state.assets);

  const renderBackButton = () => <Button className='m-r-10' onClick={() => navigate('/')}>Back</Button>;

  return (
    <>
      {selectedCoin != undefined
        ? <div className='m-b-10'>
          {renderBackButton()}
          <AddButton record={foundSelectedCoin} value={"Add"} />
        </div>
        : <>
          {renderBackButton()}
          <h1>Go to the main page to pick up your coin</h1>
        </>}
    </>
  );
};