import * as React from 'react';
import { MainPage } from './pages/MainPage/MainPage';
import { Routes, Route } from "react-router-dom";
import { CoinInfoPage } from './pages/CoinInfoPage/CoinInfoPage';
import { ROUTES } from './utils/constants';
import './style.scss';


export const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<MainPage />} />
      <Route path={ROUTES.ERROR} element={<MainPage />} />
      <Route path={ROUTES.INFO} element={<CoinInfoPage />} />
    </Routes>
  );
};