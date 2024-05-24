
import React from 'react';
import { TextSearch } from './TextSearch';
import { MockedState, MockStore } from '../../stories/mockData';

export default {
  component: TextSearch,
  title: 'TextSearch',
  tags: ['autodocs'],
  excludeStories: /.*MockedState$/,
};

export const Default = {
  decorators: [
    (story: any) => <MockStore assetsState={MockedState}>{story()}</MockStore>,
  ],
};

