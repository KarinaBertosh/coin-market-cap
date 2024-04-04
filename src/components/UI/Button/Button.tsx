import React from 'react';
import { Button as ButtonANTD } from 'antd';

interface IButtonProps {
  onClick: () => void,
  buttonName: string;
  className?: string;
}

export const Button = ({ onClick, buttonName, className = '' }: IButtonProps) => {
  return (
    <ButtonANTD onClick={onClick} className={className}>
      {buttonName}
    </ButtonANTD>
  );
};