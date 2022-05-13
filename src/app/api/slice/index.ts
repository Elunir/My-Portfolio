import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { portfolioDataSaga } from './saga';
import { PortfolioDataState } from './types';

export const initialState: PortfolioDataState = {
  data: {},
  isLoading: true,
};

const slice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    loadData(state) {
      state.isLoading = true;
    },
    dataLoaded(state, action) {
      state.data = action.payload;
      state.isLoading = false;
    },
  },
});

export const { actions: portfolioDataActions } = slice;

export const usePortfolioDataSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: portfolioDataSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = usePortfolioDataSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
