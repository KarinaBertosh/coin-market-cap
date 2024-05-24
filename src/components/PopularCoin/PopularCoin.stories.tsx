
import React from 'react';
import { PopularCoin } from './PopularCoin';
import { mockCoinRating, MockedState, MockStore } from '../../stories/mockData';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';
import '../PopularCoins/style.scss';

export default {
  component: PopularCoin,
  title: 'PopularCoin',
  tags: ['autodocs'],
  excludeStories: /.*MockedState$/,
};

export const Default = {
  decorators: [
    (story: any) => <MockStore assetsState={MockedState}>{story()}</MockStore>,
    withRouter
  ],
  args: {
    rating: mockCoinRating[0]
  },
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: '/' },
    }),
  },
};

