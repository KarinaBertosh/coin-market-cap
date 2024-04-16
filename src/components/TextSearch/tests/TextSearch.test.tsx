import React from 'react';
import { TextSearch } from '../TextSearch';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

test('render TextSearch', () => {
  render(
    <Provider store={store}>
      <TextSearch />
    </Provider>
  );
});
