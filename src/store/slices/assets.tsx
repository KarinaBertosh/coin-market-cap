import {
  createSlice
} from '@reduxjs/toolkit';
import { fetchAssets } from '../../api/assets';
import { IAsset, ICoinRow } from '../../utils/types';
import { KEY_LS, getFormattedPriceCoins } from '../../utils/default';

interface IAssetsState {
  assets: IAsset[];
  coins: any;
  coinsRow: ICoinRow[];
  isLoading: boolean;
  searchText: string;
  selectedCoin: IAsset,
}

const initialState: IAssetsState = {
  assets: [],
  coins: [],
  coinsRow: [],
  isLoading: false,
  searchText: '',
  selectedCoin: null,
};

export const slice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    setCoins: (state, { payload }) => {
      state.coins = payload;
    },
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
  setCoins,
  setCoinsRow,
  setSearchText,
  setSelectedCoin,
} = slice.actions;

export default slice.reducer;
