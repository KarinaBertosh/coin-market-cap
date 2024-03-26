import * as React from 'react';
import { Table } from "antd";
import { columns } from '../../utils/constants';
import { getData } from '../../utils/default';

export function TableCoin() {
    return (
        <Table dataSource={getData()} columns={columns}/>
    );
}