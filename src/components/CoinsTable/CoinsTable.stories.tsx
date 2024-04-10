
import React from 'react';
import { CoinsTable } from './CoinsTable';
import { MockedState, MockStore } from '../../tests/mockData';
import { withRouter } from 'storybook-addon-remix-react-router';

export default {
  component: CoinsTable,
  title: 'CoinsTable',
  tags: ['autodocs'],
  excludeStories: /.*MockedState$/,
};

export const Default = {
  decorators: [
    (story: any) => <MockStore assetsState={MockedState}>{story()}</MockStore>,
    withRouter
  ],
};

