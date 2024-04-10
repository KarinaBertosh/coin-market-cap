
import React from 'react';
import { Header } from './Header';
import { MockedState, MockStore } from '../../tests/mockData';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';
import './style.scss'
import '../PortfolioAmount/style.scss'
import '../../style.scss'

export default {
  component: Header,
  title: 'Header',
  tags: ['autodocs'],
  excludeStories: /.*MockedState$/,
};

export const Default = {
  decorators: [
    (story: any) => <MockStore assetsState={MockedState}>{story()}</MockStore>,
    withRouter
  ],
  args: {
    coin: MockedState.coinsRow[0]
  },
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: '/' },
    }),
  },
};

