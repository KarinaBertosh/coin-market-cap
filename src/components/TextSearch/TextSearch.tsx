import React, { useEffect } from 'react';
import { Input } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSearchText } from '../../store/slices/assets';
import { callApi, getData } from '../../utils/default';
import './style.scss';


export const TextSearch = () => {
  const onSearch: SearchProps['onSearch'] = (value, _e) => dispatch(setSearchText(value));
  const dispatch = useAppDispatch();
  const { searchText } = useAppSelector((state) => state.assets);

  useEffect(() => {
    (async () => {
      await callApi(async () => await getData(dispatch));
    })();
  }, [searchText]);

  return (
    <div className="text-search">
      <Input.Search
        placeholder="input search text"
        onSearch={onSearch}
        enterButton
      />
      {/* {isInputTextError &&
                <div>There is no such coin</div>} */}
    </div>
  );
};