
import { TextSearch } from './TextSearch';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import React from 'react';
import { MockedState } from '../../tests/mockData';
import { fetchAssets } from '../../api/assets';



const Mockstore = ({ children }: any) => (
  <Provider
    store={configureStore({
      reducer: {
        assets: createSlice({
          name: 'assets',
          initialState: MockedState,
          reducers: {
            setCoinsRow: (state, { payload }) => {
              state.coinsRow = payload;
            },
            setSearchText: (state, { payload }) => {
              state.searchText = payload;
            },
            setSelectedCoin: (state, { payload }) => {
              state.selectedCoin = payload;
            },
          },
          // extraReducers(builder) {
          //   builder.addCase(fetchAssets.pending, (state) => {
          //     state.isLoading = true;
          //   });
          //   builder.addCase(fetchAssets.fulfilled, (state, { payload }) => {
          //     state.assets = payload;
          //     state.isLoading = false;
          //   });
          //   builder.addCase(fetchAssets.rejected, (state) => {
          //     state.isLoading = false;
          //   });
          // },
        }).reducer,
      },

    })}
  >
    {children}
  </Provider>
);

export default {
  component: TextSearch,
  title: 'TextSearch',
  decorators: [(story: any) => <div style={{ padding: '3rem' }}>{story()}</div>],
  tags: ['autodocs'],
  excludeStories: /.*MockedState$/,
};

export const Default = {
  decorators: [
    (story: any) => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>,
  ],
};

