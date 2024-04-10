
import { PortfolioCoin } from './PortfolioCoin';
import { MockedState } from '../../tests/mockData';

export default {
  component: PortfolioCoin,
  title: 'PortfolioCoin',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    coin: MockedState.coinsRow[0],
  },
};

