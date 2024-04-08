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
  selectedCoin: IAsset ,
}

const initialState: IAssetsState = {
  assets: [],
  coinsRow: [],
  isLoading: false,
  searchText: '',
  selectedCoin: null,
};

export const slice = createSlice({
  name: 'assets',
  initialState,
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
  setCoinsRow,
  setSearchText,
  setSelectedCoin,
} = slice.actions;

export default slice.reducer;
