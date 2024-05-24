
import React from 'react';
import { Overlay } from './Overlay';
import { MockedState, MockStore } from '../../stories/mockData';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';
import { CoinsTable } from '../CoinsTable/CoinsTable';

export default {
  component: Overlay,
  title: 'Overlay',
  tags: ['autodocs'],
  excludeStories: /.*MockedState$/,
};

export const Default = {
  decorators: [
    (story: any) => <MockStore assetsState={MockedState}>{story()}</MockStore>,
    withRouter
  ],
  args: {
    children: <CoinsTable />
  },
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: '/' },
    }),
  },
};

