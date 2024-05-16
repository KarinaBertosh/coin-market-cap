import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './app';
import { store } from './store/store';
import { HashRouter } from "react-router-dom";
import { Overlay } from './components/Overlay/Overlay';
import './style.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <Overlay>
          <App />
        </Overlay>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
);