import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import endpoints from '../../configs/endpoints';

const initialState = {
  loading: false,
  err: null,
  monthlyBandwidth: [],
  avgStoredFiles: [],
  avgGBStored: [],
  report: [],
  total: 0.0,
  reportLoadProgress: 0
};

const months = [
  {
    abbreviation: 'Jan',
    name: 'January'
  },
  {
    abbreviation: 'Feb',
    name: 'February'
  },
  {
    abbreviation: 'Mar',
    name: 'March'
  },
  {
    abbreviation: 'Apr',
    name: 'April'
  },
  {
    abbreviation: 'May',
    name: 'May'
  },
  {
    abbreviation: 'Jun',
    name: 'June'
  },
  {
    abbreviation: 'Jul',
    name: 'July'
  },
  {
    abbreviation: 'Aug',
    name: 'August'
  },
  {
    abbreviation: 'Sep',
    name: 'September'
  },
  {
    abbreviation: 'Oct',
    name: 'October'
  },
  {
    abbreviation: 'Nov',
    name: 'November'
  },
  {
    abbreviation: 'Dec',
    name: 'December'
  }
];

const lastDay = function (y, m) {
  return new Date(y, m + 1, 0).getDate();
};

const firstDay = function (y, m) {
  return new Date(y, m + 1, 1).getDate();
};

export const getMonthUsageBandwidth = createAsyncThunk(
  'bandwidthReport/getMonthUsageBandwidth',
  async (data, api) => {
    let temp = [];
    let curDate = new Date();

    try {
      // api.dispatch(bandwidthReportSlice.actions.loading());
      for (var i = 0; i < months.length; i++) {
        let firstDate = firstDay(curDate.getFullYear(), i);
        let lastDate = lastDay(curDate.getFullYear(), i);
        let firstMilestone =
          new Date(curDate.getFullYear(), i + 1, 1).getTime() / 1000;
        let lastMilestone =
          new Date(curDate.getFullYear(), i + 1, lastDate).getTime() / 1000;

        const response = await axios.get(
          endpoints.GET_TOTAL_BANDWIDTH +
            `?from=${firstMilestone + 3600 * 24 * firstDate}&to=${
              lastMilestone + 3600 * 24 * lastDate
            }`,
          {
            headers: {
              Authorization: `Bearer ${data.authToken}`
            }
          }
        );
        temp.push({
          month: months[i].name.toString(),
          unit: 'MB',
          usage: Math.round((response.data * 100) / 8 / 1024 / 1024) / 100
        });
      }
      return temp;
    } catch (err) {
      return api.rejectWithValue(err.response.data.error);
    }
  }
);

export const getReportCurrentMonth = createAsyncThunk(
  'report/getReportCurrentMonth',
  async (data, api) => {
    let curDate = new Date();
    try {
      api.dispatch(bandwidthReportSlice.actions.loading());
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

export const getAvgGBStored = createAsyncThunk(
  'bandwidthReport/getAvgGBStored',
  async (data, api) => {
    let temp = [];
    let curDate = new Date();

    try {
      // api.dispatch(bandwidthReportSlice.actions.loading());
      for (var i = 0; i < months.length; i++) {
        let firstDate = firstDay(curDate.getFullYear(), i);
        let lastDate = lastDay(curDate.getFullYear(), i);
        let firstMilestone =
          new Date(curDate.getFullYear(), i + 1, 1).getTime() / 1000;
        let lastMilestone =
          new Date(curDate.getFullYear(), i + 1, lastDate).getTime() / 1000;

        const response = await axios.get(
          endpoints.GET_AVG_GB_STORED +
            `?from=${firstMilestone + 3600 * 24 * firstDate}&to=${
              lastMilestone + 3600 * 24 * lastDate
            }`,
          {
            headers: {
              Authorization: `Bearer ${data.authToken}`
            }
          }
        );
        temp.push({
          month: months[i].name.toString(),
          unit: 'MB',
          usage: Math.round((response.data * 100) / 8 / 1024 / 1024) / 100
        });
      }
      return temp;
    } catch (err) {
      return api.rejectWithValue(err.response.data.error);
    }
  }
);

export const getTotalUsageBandwidth = createAsyncThunk(
  'bandwidthReport/getTotalUsageBandwidth',
  async (data, api) => {
    let curDate = new Date();
    let firstDate = new Date(curDate.getFullYear(), curDate.getMonth(), 1);
    try {
      // api.dispatch(bandwidthReportSlice.actions.loading());
      const response = await axios.get(
        endpoints.GET_TOTAL_BANDWIDTH +
          `?from=${firstDate.getTime() / 1000}&to=${Math.floor(
            curDate.getTime() / 1000
          )}`,
        {
          headers: {
            Authorization: `Bearer ${data.authToken}`
          }
        }
      );
      return Math.round((response.data * 100) / 8 / 1024 / 1024) / 100;
    } catch (err) {
      return api.rejectWithValue(err.response.data.error);
    }
  }
);

export const getAverageStoredFiles = createAsyncThunk(
  'bandwidthReport/getAverageStoredFiles',
  async (data, api) => {
    let temp = [];
    let curDate = new Date();

    try {
      // api.dispatch(bandwidthReportSlice.actions.loading());
      for (var i = 0; i < months.length; i++) {
        let firstDate = firstDay(curDate.getFullYear(), i);
        let lastDate = lastDay(curDate.getFullYear(), i);
        let firstMilestone =
          new Date(curDate.getFullYear(), i + 1, 1).getTime() / 1000;
        let lastMilestone =
          new Date(curDate.getFullYear(), i + 1, lastDate).getTime() / 1000;

        const response = await axios.get(
          endpoints.GET_AVG_OBJECT_COUNT +
            `?from=${firstMilestone + 3600 * 24 * firstDate}&to=${
              lastMilestone + 3600 * 24 * lastDate
            }`,
          {
            headers: {
              Authorization: `Bearer ${data.authToken}`
            }
          }
        );
        temp.push({
          month: months[i].name.toString(),
          unit: 'files',
          usage: response.data
        });
      }
      return temp;
    } catch (err) {
      return api.rejectWithValue(err.response.data.error);
    }
  }
);

export const bandwidthReportSlice = createSlice({
  name: 'bandwidthReport',
  initialState: initialState,
  reducers: {
    loading: (state, action) => {
      state.loading = true;
    },
    clearReportState: (state, action) => {
      state.loading = false;
      state.err = null;
      state.reportLoadProgress = 0;
    }
  },
  extraReducers: {
    [getMonthUsageBandwidth.fulfilled]: (state, action) => {
      state.reportLoadProgress = state.reportLoadProgress + 1;
      state.err = null;
      state.monthlyBandwidth = action.payload;
    },
    [getMonthUsageBandwidth.rejected]: (state, action) => {
      state.reportLoadProgress = state.reportLoadProgress + 1;
      state.err = action.payload;
      state.monthlyBandwidth = [];
    },

    [getAverageStoredFiles.fulfilled]: (state, action) => {
      state.reportLoadProgress = state.reportLoadProgress + 1;
      state.err = null;
      state.avgStoredFiles = action.payload;
    },
    [getAverageStoredFiles.rejected]: (state, action) => {
      state.reportLoadProgress = state.reportLoadProgress + 1;
      state.err = action.payload;
      state.avgStoredFiles = [];
    },

    [getAvgGBStored.fulfilled]: (state, action) => {
      state.reportLoadProgress = state.reportLoadProgress + 1;
      state.err = null;
      state.avgGBStored = action.payload;
    },
    [getAvgGBStored.rejected]: (state, action) => {
      state.reportLoadProgress = state.reportLoadProgress + 1;
      state.err = action.payload;
      state.avgGBStored = [];
    },

    [getTotalUsageBandwidth.fulfilled]: (state, action) => {
      state.err = null;
      state.total = action.payload;
    },
    [getTotalUsageBandwidth.rejected]: (state, action) => {
      state.err = action.payload;
      state.total = 0.0;
    },
    [getReportCurrentMonth.fulfilled]: (state, action) => {
      state.reportLoadProgress = state.reportLoadProgress + 1;
      state.err = null;
      state.report = action.payload;
    },
    [getReportCurrentMonth.rejected]: (state, action) => {
      state.reportLoadProgress = state.reportLoadProgress + 1;
      state.err = action.payload;
      state.report = [];
    }
  }
});

export const reportActions = bandwidthReportSlice.actions;
