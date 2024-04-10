
import React from 'react';
import { TextSearch } from './TextSearch';
import { MockedState, MockStore } from '../../tests/mockData';

export default {
  component: TextSearch,
  title: 'TextSearch',
  decorators: [(story: any) => <div style={{ padding: '3rem' }}>{story()}</div>],
  tags: ['autodocs'],
  excludeStories: /.*MockedState$/,
};

export const Default = {
  decorators: [
    (story: any) => <MockStore assetsState={MockedState}>{story()}</MockStore>,
  ],
};

