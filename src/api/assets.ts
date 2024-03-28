import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


interface IFetchAssetHistoryParams {
  id: string,
  interval: string;
}

export const fetchAssets = createAsyncThunk(
  'GET_assets/fetchAssets',
  async () => {
    const response = await axios.get('https://api.coincap.io/v2/assets/');
    return response.data.data;
  },
);

export const fetchAssetHistory = createAsyncThunk(
  'GET_assetHistory/fetchAssetHistory',
  async (data: IFetchAssetHistoryParams) => {
    const response = await axios.get(`https://api.coincap.io/v2/assets/${data.id}/history?interval=${data.interval}`);
    return response.data.data;
  },
);
