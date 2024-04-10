
import { PortfolioCoin } from './PortfolioCoin';
import React from 'react';
import { MockedState, MockStore } from '../../tests/mockData';

export default {
  component: PortfolioCoin,
  title: 'PortfolioCoin',
  decorators: [(story: any) => <div style={{ padding: '3rem' }}>{story()}</div>],
  tags: ['autodocs'],
  excludeStories: /.*MockedState$/,
};

export const Default = {
  decorators: [
    (story: any) => <MockStore taskboxState={MockedState}>{story()}</MockStore>,
  ],
  args: {
    coin: MockedState.coinsRow[0],
  },
};

