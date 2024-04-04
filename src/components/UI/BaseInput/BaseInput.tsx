import React from 'react';
import { Input as InputANTD } from 'antd';

interface IBaseInputProps {
  onPressEnter: (e: any) => void;
  isError: boolean;
  errorText?: string;
  defaultValue?: string;
  maxLength?: number;
}

export const BaseInput = (props: IBaseInputProps) => {
  const { onPressEnter, isError, errorText = '' } = props;

  return (
    <>
      <InputANTD
        defaultValue='0'
        maxLength={2}
        onPressEnter={onPressEnter}
      />
      {isError && <p>{errorText}</p>}
    </>
  );
};