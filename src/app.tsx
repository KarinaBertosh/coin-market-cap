import * as React from 'react';
import { MainPage } from './pages/MainPage/MainPage';
import { Routes, Route, useNavigate } from "react-router-dom";
import { CoinInfoPage } from './pages/CoinInfoPage/CoinInfoPage';
import { Layout, Menu, theme } from 'antd';
import './style.scss';

const { Header, Content, Footer } = Layout;


export const App = () => {
  const navigate = useNavigate();
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();
  const items = [{
    key: "/",
    label: "Main",
  }];

  return (
    <Layout>
      <Header className='header'>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          className='menu'
          onClick={(e) => navigate(e.key)}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path="*" element={<MainPage />} />
            <Route path='/' element={<MainPage />} />
            <Route path='/info' element={<CoinInfoPage />} />
          </Routes>
        </div>
      </Content>
      <Footer className='footer' />
    </Layout>
  );
};