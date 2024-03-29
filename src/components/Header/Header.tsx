import * as React from 'react';
import { Layout } from 'antd';
import { PopularCoinsBlock } from '../PopularCoinsBlock/PopularCoinsBlock';
import { PortfolioTotalValueBlock } from '../PortfolioTotalValueBlock/PortfolioTotalValueBlock';
import './style.scss';

export const Header = () => {
  return (
    <Layout.Header className='header'>
      <PopularCoinsBlock />
      <PortfolioTotalValueBlock />
    </Layout.Header>
  );
};