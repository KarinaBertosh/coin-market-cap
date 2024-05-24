
import { AddButton } from './AddButton';
import { MockedState } from '../../stories/mockData';

export default {
  component: AddButton,
  title: 'AddButton',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    coin: MockedState.coinsRow[0],
    buttonName: 'Add'
  }
};

