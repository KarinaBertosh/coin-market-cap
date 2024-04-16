import { render } from "@testing-library/react";
import { InputAddCoin } from "../InputAddCoin";
import React from "react";
import { MockedState } from "../../../tests/mockData";
import { Provider } from "react-redux";
import { store } from "../../../store/store";


test('render InputAddCoin', () => {
  render(
    <Provider store={store}>
      <InputAddCoin coin={MockedState.coinsRow[0]} />
    </Provider>
  );
});