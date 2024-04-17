import React from 'react';
import { CoinsTable } from '../CoinsTable';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn()),
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

test('render CoinsTable', () => {
  render(
    <Provider store={store}>
      <CoinsTable />
    </Provider>
  );
});

// test('render TextSearch', () => {
//   const { getByText } = render(
//     <Provider store={store}>
//       <CoinsTable />
//     </Provider>
//   );
//   fireEvent.click(getByText(''))
// });


