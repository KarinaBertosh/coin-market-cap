
import React from 'react';
import { NavigationButtons } from './NavigationButtons';
import { MockedState, MockStore } from '../../mockData';
import { withRouter } from 'storybook-addon-remix-react-router';

export default {
  component: NavigationButtons,
  title: 'NavigationButtons',
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
};

