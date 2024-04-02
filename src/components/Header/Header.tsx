import * as React from 'react';
import { Layout } from 'antd';
import { PopularCoinsBlock } from '../PopularCoinsBlock/PopularCoinsBlock';
import { PortfolioAmount } from '../PortfolioAmount/PortfolioAmount';
import './style.scss';

export const Header = () => {
  return (
    <Layout.Header className="header">
      <PopularCoinsBlock />
      <PortfolioAmount />
    </Layout.Header>
  );
};