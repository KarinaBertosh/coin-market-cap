
import { InputAddCoin } from './InputAddCoin';
import { MockedState } from '../../tests/mockData';

export default {
  component: InputAddCoin,
  title: 'InputAddCoin',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    coin: MockedState.coinsRow[0]
  },
};

