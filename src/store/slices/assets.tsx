import {
  createSlice
} from '@reduxjs/toolkit';
import { fetchAssets } from '../../api/assets';
import { IAsset } from '../../utils/types';


interface IAssetsState {
  assets: any;
  defaultTableData: any;
  tableData: any;
  isLoading: boolean;
  inputText: string;
  isInputTextError: boolean;
  selectedCoin: IAsset,
}

const initialState: IAssetsState = {
  assets: [],
  defaultTableData: [],
  tableData: [],
  isLoading: false,
  inputText: '',
  isInputTextError: false,
  selectedCoin: null
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

export const { setDefaultTableData, setTableData, setInputText, setIsInputTextError, setSelectedCoin } = slice.actions;

export default slice.reducer;
