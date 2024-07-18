import { createSlice } from '@reduxjs/toolkit';
import { getAdverts } from './operations';

const INITIAL_STATE = {
  items: [],
  isLoading: false,
  isError: false,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: INITIAL_STATE,
  extraReducers: builder => {
    builder
      .addCase(getAdverts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.items = action.payload;
      })
      .addCase(getAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const advertsReducer = advertsSlice.reducer;
