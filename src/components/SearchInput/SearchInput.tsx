import React from 'react';
import { Input } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import './style.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setInputText } from '../../store/slices/assets';


export const SearchInput = () => {
    const onSearch: SearchProps['onSearch'] = (value, _e) => dispatch(setInputText(value));
    const dispatch = useAppDispatch();
    const { isInputTextError } = useAppSelector((state) => state.assets);

    return (
        <div className='input'>
            <Input.Search placeholder="input search text" onSearch={onSearch} enterButton />
            {isInputTextError ? <div>There is no such coin</div> : <></>}
        </div>
    );
};