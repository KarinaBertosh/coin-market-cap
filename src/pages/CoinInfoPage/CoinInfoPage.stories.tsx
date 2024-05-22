
import React from 'react';
import { CoinInfoPage } from './CoinInfoPage';
import { MockedState, MockStore } from '../../mockData';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';

export default {
  component: CoinInfoPage,
  title: 'CoinInfoPage',
  tags: ['autodocs'],
  excludeStories: /.*MockedState$/,
};

export const Default = {
  decorators: [
    (story: any) => <MockStore assetsState={MockedState}>{story()}</MockStore>,
    withRouter
  ],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: '/' },
    }),
  },
};

