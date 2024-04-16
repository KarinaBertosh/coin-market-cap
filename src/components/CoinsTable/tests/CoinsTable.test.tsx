import React from 'react';
import { CoinsTable } from '../CoinsTable';
import { fireEvent, render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { store } from '../../../store/store';

// beforeEach(() => {
//   const mockGetItem = jest.fn();
//   const mockSetItem = jest.fn();
//   const mockRemoveItem = jest.fn();
//   Object.defineProperty(window, "localStorage", {
//     value: {
//       getItem: (...args: string[]) => mockGetItem(...args),
//       setItem: (...args: string[]) => mockSetItem(...args),
//       removeItem: (...args: string[]) => mockRemoveItem(...args),
//     },
//   });
// });

// jest.mock('useLocalStorageState', () => ({
//   ...jest.requireActual('useLocalStorageState'),
//   __esModule: true,
//   default: jest.fn(),
// }))
// jest.spyOn(Storage.prototype, 'setItem');

beforeEach(() => {
  localStorage.clear();
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

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: () => (jest.fn()),
// }));
