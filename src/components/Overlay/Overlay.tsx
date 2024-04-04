import * as React from 'react';
import { Layout, theme } from 'antd';
import { Header } from '../Header/Header';


export const Overlay = ({ children }: any) => {
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

  return (
    <Layout>
      <Header />
      <Layout.Content
        style={{
          padding: 24,
          minHeight: 380,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        {children}
      </Layout.Content>
    </Layout>
  );
};