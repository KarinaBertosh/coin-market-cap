import React from 'react';
import { Button as ButtonANTD } from 'antd';

interface IButtonProps {
  onClick: () => void,
  buttonName: string;
  className?: string;
}

export const Button = (props: IButtonProps) => {
  const { onClick, buttonName, className = '' } = props;
  
  return (
    <ButtonANTD onClick={onClick} className={className}>
      {buttonName}
    </ButtonANTD>
  );
};