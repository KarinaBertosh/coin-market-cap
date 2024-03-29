import {
  createSlice
} from '@reduxjs/toolkit';
import { fetchAssetHistory, fetchAssets } from '../../api/assets';
import { IAsset } from '../../utils/types';


interface IAssetsState {
  assets: any;
  defaultTableData: any;
  tableData: any;
  isLoading: boolean;
  inputText: string;
  isInputTextError: boolean;
  selectedCoin: IAsset,
  historyCoinPriceChanges: any;
  portfolioCoins: any;
  portfolioDifferenceCost: string;
  portfolioDifferenceCostPercent: string
}

const initialState: IAssetsState = {
  assets: [],
  defaultTableData: [],
  tableData: [],
  isLoading: false,
  inputText: '',
  isInputTextError: false,
  selectedCoin: null,
  historyCoinPriceChanges: [],
  portfolioCoins: [],
  portfolioDifferenceCost: '0',
  portfolioDifferenceCostPercent: '0',
};

export const slice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    setDefaultTableData: (state, { payload }) => {
      state.defaultTableData = payload;
    },
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
    setPortfolioDifferenceCost: (state, { payload }) => {
      state.portfolioDifferenceCost = payload;
    },
    setPortfolioDifferencePercent: (state, { payload }) => {
      state.portfolioDifferenceCostPercent = payload;
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
  setDefaultTableData,
  setTableData,
  setInputText,
  setIsInputTextError,
  setSelectedCoin,
  setPortfolioCoins,
  setPortfolioDifferenceCost,
  setPortfolioDifferencePercent
} = slice.actions;

export default slice.reducer;
