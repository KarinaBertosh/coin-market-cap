
import React from 'react';
import { CoinInfo } from './CoinInfo';
import { MockedState, MockStore } from '../../stories/mockData';

export default {
  component: CoinInfo,
  title: 'CoinInfo',
  tags: ['autodocs'],
  excludeStories: /.*MockedState$/,
};

export const Default = {
  decorators: [
    (story: any) => <MockStore assetsState={MockedState}>{story()}</MockStore>,
  ],
  params: {
    selectedCoin: MockedState.coinsRow[0]
  }
};

