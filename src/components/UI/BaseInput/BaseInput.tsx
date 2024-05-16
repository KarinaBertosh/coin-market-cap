import React from 'react';
import { Input as InputANTD } from 'antd';

interface IBaseInputProps {
  handlingPressEnter: (e: any) => void;
  isError: boolean;
  errorText?: string;
  defaultValue?: string;
  maxLength?: number;
}

export const BaseInput = (props: IBaseInputProps) => {
  const { handlingPressEnter, isError, errorText = '' } = props;

  return (
    <>
      <InputANTD
        defaultValue='0'
        maxLength={2}
        onPressEnter={handlingPressEnter}
      />
      {isError && <p>{errorText}</p>}
    </>
  );
};