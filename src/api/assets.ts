import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


interface ICoinPricesParams {
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

export const getCoinPrices = async (params: ICoinPricesParams) => {
  const response = await axios.get(`https://api.coincap.io/v2/assets/${params.id}/history?interval=${params.interval}`);
  return response.data.data;
};

export const getRates = async () => {
  const response = await axios.get('https://api.coincap.io/v2/rates');
  return response.data.data.slice(0, 3);
};
