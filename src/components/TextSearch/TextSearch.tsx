import React from 'react';
import { Input } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setInputText } from '../../store/slices/assets';
import './style.scss';


export const TextSearch = () => {
    const onSearch: SearchProps['onSearch'] = (value, _e) => dispatch(setInputText(value));
    const dispatch = useAppDispatch();
    const { isInputTextError } = useAppSelector((state) => state.assets);

    return (
        <div className='text-search'>
            <Input.Search
                placeholder="input search text"
                onSearch={onSearch}
                enterButton
            />
            {isInputTextError &&
                <div>There is no such coin</div>}
        </div>
    );
};