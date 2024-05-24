
import React from 'react';
import { PopularCoins } from './PopularCoins';
import { MockedState, MockStore } from '../../stories/mockData';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';


export default {
  component: PopularCoins,
  title: 'PopularCoins',
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

