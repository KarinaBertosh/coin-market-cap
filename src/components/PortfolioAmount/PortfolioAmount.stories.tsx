
import React from 'react';
import { PortfolioAmount } from './PortfolioAmount';
import { MockedState, MockStore } from '../../mockData';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';

export default {
  component: PortfolioAmount,
  title: 'PortfolioAmount',
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

