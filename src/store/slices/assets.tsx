import {
  createSlice
} from '@reduxjs/toolkit';
import { fetchAssets } from '../../api/assets';


interface IAssetsState {
  assets: any;
  tableData: any;
  isLoading: boolean;
}

const initialState: IAssetsState = {
  assets: [],
  tableData: [],
  isLoading: false
};

export const slice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    setTableData: (state, { payload }) => {
      state.tableData = payload;
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

export const { setTableData } = slice.actions;

export default slice.reducer;
