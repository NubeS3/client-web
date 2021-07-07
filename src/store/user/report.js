import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import endpoints from '../../configs/endpoints';

const initialState = {
  loading: false,
  err: null,
  report: []
};

const firstDay = (y, m) => {
  return new Date(y, m + 1, 1).getDate();
};

const lastDay = (y, m) => {
  return new Date(y, m + 1, 0).getDate();
};

export const reportSlice = createSlice({
  name: 'report',
  initialState: initialState,
  reducers: {
    loading: (state, action) => {
      state.loading = true;
    },
    reset: (state, action) => {
      state.loading = false;
      state.err = null;
      state.report = [];
    }
  },
  extraReducers: {}
});
