import React from 'react';
import { Input } from 'antd';

interface ISearchInputProps {
  onChange: (e: any) => void;
  isError: boolean;
  errorText?: string;
  placeholder?: string;
}

export const SearchInput = (props: ISearchInputProps) => {
  const { onChange, isError, errorText = 'There is no such coin', placeholder = 'input search text' } = props;

  return (
    <div className="text-search">
      <Input.Search
        placeholder={placeholder}
        onChange={onChange}
        enterButton
      />
      {
        isError &&
        <div data-testid="error-text">{errorText}</div>
      }
    </div>
  );
};