import { render } from "@testing-library/react";
import { InputAddCoin } from "../InputAddCoin";
import React from "react";
import { MockedState } from "../../../tests/mockData";
import useLocalStorageState from 'use-local-storage-state';


// jest.mock('useLocalStorageState', () => ({
//   ...jest.requireActual('useLocalStorageState'),
//   __esModule: true,
//   default: jest.fn(),
// }));

jest.fn(useLocalStorageState)

test('render InputAddCoin', () => {
  render(
    // <Provider store={store}>
    <InputAddCoin coin={MockedState.coinsRow[0]}/>
    // </Provider>
  );
});