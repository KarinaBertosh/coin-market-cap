import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const fetchAssets = createAsyncThunk(
  'GET_assets/fetchAssets',
  async () => {
    const response = await axios.get('https://api.coincap.io/v2/assets/')
    return response.data.data;
  },
);
