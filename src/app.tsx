import * as React from 'react';
import { MainPage } from './pages/MainPage/MainPage';
import { Routes, Route } from "react-router-dom";
import { CoinInfoPage } from './pages/CoinInfoPage/CoinInfoPage';


export const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="*" element={<MainPage />} />
                <Route path='/' element={<MainPage />} />
                <Route path='/info' element={<CoinInfoPage />} />
            </Routes>
        </div>
    );
};