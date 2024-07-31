import { createSlice } from '@reduxjs/toolkit';
import { getAdverts } from './operations';

const INITIAL_STATE = {
  items: [],
  favorites: [],
  location: '',
  filters: { camperEquipment: [], camperType: '' },
  isLoading: false,
  isError: false,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: INITIAL_STATE,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload.id
      );
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
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
export const { addToFavorites, removeFromFavorites, setLocation, setFilters } =
  advertsSlice.actions;
