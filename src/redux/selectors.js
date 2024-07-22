import { createSelector } from '@reduxjs/toolkit';

export const selectAdverts = state => state.adverts.items;
export const selectIsLoading = state => state.adverts.isLoading;
export const selectIsError = state => state.adverts.isError;
export const selectLocation = state => state.camper.location;
export const selectFilters = state => state.camper.filters;
export const selectFavorites = state => state.camper.favorites;

export const selectFilteredAdverts = createSelector(
  [selectAdverts, selectLocation],
  (adverts, filter) => {
    if (filter.length > 0) {
      return adverts.filter(({ location }) =>
        location.toLowerCase().includes(filter.trim().toLowerCase())
      );
    } else {
      return adverts;
    }
  }
);
