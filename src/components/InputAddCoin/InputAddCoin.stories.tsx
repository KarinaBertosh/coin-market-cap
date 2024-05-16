
import React from 'react';
import { InputAddCoin } from './InputAddCoin';
import { MockStore, MockedState } from '../../tests/mockData';

export default {
  component: InputAddCoin,
  title: 'InputAddCoin',
  tags: ['autodocs'],
};

export const Default = {
  decorators: [
    (story: any) => <MockStore assetsState={MockedState}>{story()}</MockStore>,
  ],
  args: {
    coin: MockedState.coinsRow[0]
  },
};

