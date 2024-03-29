import * as React from 'react';
import { Layout, theme } from 'antd';
import { Header } from '../Header/Header';

const { Content, Footer } = Layout;


export const Overlay = ({ children }: any) => {
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

  return (
    <Layout>
      <Header />
      <Content style={{ padding: '0 48px' }}>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}>
          {children}
        </div>
      </Content>
      <Footer className='footer' />
    </Layout>
  );
};