import * as React from 'react';
import { Main } from './pages/Main';
import { Routes, Route, Outlet, Link, Router } from "react-router-dom";
import { CoinTable } from './components/CoinTable/CoinTable';
import { SearchInput } from './components/SearchInput/SearchInput';
import { Info } from './components/Info/Info';


export const App = () => {
    return (
        <div className="App">
          <Routes>
            <Route path="*" element={<Main />} />
            <Route path='/' element={<Main />} />
            <Route path='/info' element={<Info />} />
          </Routes>
        {/* <Main /> */}
      </div>
    );
};