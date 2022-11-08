import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const { reducer, actions } = createSlice({
  name: 'someName',
  initialState,
  reducers: {}
});

export { reducer }