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

export const getReportCurrentMonth = createAsyncThunk(
  'report/getReportCurrentMonth',
  async (data, api) => {
    let curDate = new Date();
    try {
      api.dispatch(reportSlice.actions.loading());
      let firstMilestone =
        new Date(curDate.getFullYear(), curDate.getMonth(), 1).getTime() / 1000;
      let curMilestone = Math.floor(curDate.getTime() / 1000);
      const response = await axios.get(
        endpoints.GET_REPORT + `?from=${firstMilestone}&to=${curMilestone}`,
        {
          headers: { Authorization: `Bearer ${data.authToken}` }
        }
      );
      return response.data;
    } catch (e) {
      return api.rejectWithValue(e.response.data.error);
    }
  }
);

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
  extraReducers: {
    [getReportCurrentMonth.fulfilled]: (state, action) => {
      state.loading = false;
      state.err = null;
      state.report = action.payload;
    },
    [getReportCurrentMonth.rejected]: (state, action) => {
      state.loading = false;
      state.err = action.payload;
      state.report = [];
    }
  }
});
