import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6698dbb32069c438cd705ba5.mockapi.io',
});

// export const requestCampers = async () => {
//   const { data } = await instance.get('/adverts');
//   return data;
// };

export const getAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/adverts');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
