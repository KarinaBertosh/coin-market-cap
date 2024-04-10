
import { PortfolioAmount } from './PortfolioAmount';
import React from 'react';
import { MockedState, MockStore } from '../../tests/mockData';
import { localStorageForStorybook  } from "@alexgorbatchev/storybook-addon-localstorage";


export default {
  component: PortfolioAmount,
  title: 'PortfolioAmount',
  decorators: [(story: any) => <div style={{ padding: '3rem' }}>{story()}</div>],
  tags: ['autodocs'],
  excludeStories: /.*MockedState$/,
};

export const Default = {
  decorators: [
    (story: any) => <MockStore taskboxState={MockedState}>{story()}</MockStore>,
  ],
  parameters: {
    localStorage: localStorageForStorybook({
      value: 123,
      user: { name: 'John' },
    }),
  },
};

