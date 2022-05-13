import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.portfolio || initialState;

export const allData = createSelector(
  [selectSlice],
  PortfolioDataState => PortfolioDataState,
);
