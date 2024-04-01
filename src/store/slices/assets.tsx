import {
  createSlice
} from '@reduxjs/toolkit';
import { fetchAssetHistory, fetchAssets } from '../../api/assets';
import { IAsset } from '../../utils/types';


interface IAssetsState {
  assets: any;
  tableData: any;
  isLoading: boolean;
  inputText: string;
  isInputTextError: boolean;
  selectedCoin: IAsset,
  historyCoinPriceChanges: any;
  portfolioCoins: any;
}

const initialState: IAssetsState = {
  assets: [],
  tableData: [],
  isLoading: false,
  inputText: '',
  isInputTextError: false,
  selectedCoin: null,
  historyCoinPriceChanges: [],
  portfolioCoins: [],
};

export const slice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    setTableData: (state, { payload }) => {
      state.tableData = payload;
    },
    setInputText: (state, { payload }) => {
      state.inputText = payload;
    },
    setIsInputTextError: (state, { payload }) => {
      state.isInputTextError = payload;
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
    builder.addCase(fetchAssetHistory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAssetHistory.fulfilled, (state, { payload }) => {
      state.historyCoinPriceChanges = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchAssetHistory.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {
  setTableData,
  setInputText,
  setIsInputTextError,
  setSelectedCoin,
  setPortfolioCoins,
} = slice.actions;

export default slice.reducer;
