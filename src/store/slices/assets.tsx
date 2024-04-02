import {
  createSlice
} from '@reduxjs/toolkit';
import { fetchAssets } from '../../api/assets';
import { IAsset, ICoinRow } from '../../utils/types';

interface IAssetsState {
  assets: IAsset[];
  coinsRow: ICoinRow[];
  isLoading: boolean;
  searchText: string;
  selectedCoin: IAsset,
  portfolioCoins: ICoinRow[];
}

const initialState: IAssetsState = {
  assets: [],
  coinsRow: [],
  isLoading: false,
  searchText: '',
  selectedCoin: null,
  portfolioCoins: [],
};

export const slice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    setTableData: (state, { payload }) => {
      state.coinsRow = payload;
    },
    setSearchText: (state, { payload }) => {
      state.searchText = payload;
    },
    setSelectedCoin: (state, { payload }) => {
      state.selectedCoin = payload;
    },
    setPortfolioCoins: (state, { payload }) => {
      state.portfolioCoins = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAssets.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAssets.fulfilled, (state, { payload }) => {
      state.assets = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchAssets.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {
  setTableData,
  setSearchText,
  setSelectedCoin,
  setPortfolioCoins,
} = slice.actions;

export default slice.reducer;
