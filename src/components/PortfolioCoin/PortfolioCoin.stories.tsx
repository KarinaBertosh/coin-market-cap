import React from 'react';
import { PortfolioCoin } from './PortfolioCoin';
import { MockedState, MockStore } from '../../stories/mockData';


export default {
  component: PortfolioCoin,
  title: 'PortfolioCoin',
  tags: ['autodocs'],
  excludeStories: /.*MockedState$/,
};

export const Default = {
  decorators: [
    (story: any) => <MockStore assetsState={MockedState}>{story()}</MockStore>,
  ],
  args: {
    coin: MockedState.coinsRow[0],
  },
};

