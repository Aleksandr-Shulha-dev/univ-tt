import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { reducer as players} from './slice';

const rootReducer = combineReducers({
  players,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch