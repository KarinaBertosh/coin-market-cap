
import { Portfolio } from './Portfolio';
import { fn } from '@storybook/test';

export default {
  component: Portfolio,
  title: 'Portfolio',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    isModalOpen: true,
    setIsModalOpen: fn()
  },
};

