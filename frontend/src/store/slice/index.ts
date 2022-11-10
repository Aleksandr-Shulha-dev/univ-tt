import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  parseLocalStorageList,
  parseLocalStorageScoreToggleState
} from '../../helpers'

import { IPlayer, StoreInitialState } from '../../common/types';

const initialState: StoreInitialState = {
  playerList: parseLocalStorageList(),
  isScoreByGrowth: parseLocalStorageScoreToggleState(),
};

const { reducer, actions } = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlayer: (state, action:PayloadAction<IPlayer>) => {
      state.playerList.push(action.payload);
    },
    changeScoreToggleState: (state) => {
      state.isScoreByGrowth = !state.isScoreByGrowth
    }
  }
});

export const { setPlayer, changeScoreToggleState } = actions;

export { reducer }