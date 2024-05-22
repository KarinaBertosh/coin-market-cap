
import { CoinChart } from './CoinChart';
import { mockCoinPrices } from '../../mockData';
import { fn } from '@storybook/test';
import { getFormattedValue } from '../../utils/default';

export default {
  component: CoinChart,
  title: 'CoinChart',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    coinPrices: mockCoinPrices.map((el: any) => getFormattedValue(el.priceUsd, 0)),
    setChartType: fn(),
    isLoading: false
  }
};

