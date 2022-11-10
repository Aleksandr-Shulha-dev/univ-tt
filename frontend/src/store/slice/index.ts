import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { parseLocalStorage } from '../../helpers'

import { IPlayer, PlayersInitialState } from '../../common/types';

const initialState: PlayersInitialState = {
  playerList: parseLocalStorage()
};

const { reducer, actions } = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlayer: (state, action:PayloadAction<IPlayer>) => {
      state.playerList.push(action.payload);
    }
  }
});

export const { setPlayer } = actions;

export { reducer }