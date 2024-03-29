import * as React from 'react';
import { MainPage } from './pages/MainPage/MainPage';
import { Routes, Route } from "react-router-dom";
import { CoinInfoPage } from './pages/CoinInfoPage/CoinInfoPage';
import { Overlay } from './components/Overlay/Overlay';
import './style.scss';


export const App = () => {
  return (
    <Overlay>
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/info' element={<CoinInfoPage />} />
      </Routes>
    </Overlay>
  );
};