import * as React from 'react';
import { Layout } from 'antd';
import { PopularCoins } from '../PopularCoins/PopularCoins';
import { PortfolioAmount } from '../PortfolioAmount/PortfolioAmount';
import './style.scss';

export const Header = () => {
  return (
    <Layout.Header className="header">
      <PopularCoins />
      <PortfolioAmount />
    </Layout.Header>
  );
};