
import React from 'react';
import { MainPage } from './MainPage';
import { MockedState, MockStore } from '../../tests/mockData';
import { withRouter } from 'storybook-addon-remix-react-router';

export default {
  component: MainPage,
  title: 'MainPage',
  tags: ['autodocs'],
  excludeStories: /.*MockedState$/,
};

export const Default = {
  decorators: [
    (story: any) => <MockStore assetsState={MockedState}>{story()}</MockStore>,
    withRouter
  ],
};

