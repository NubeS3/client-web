import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import endpoints from '../../configs/endpoints';

const initialState = {
  accessKeyReqCount: { count: 0 },
  signedKeyReqCount: { count: 0 },
  appKeyList: [],
  masterKey: {},
  isFulfilled: false,
  isRejected: false,
  isLoading: false,
  err: null
};

export const generateMasterKey = createAsyncThunk(
  'appKey/generateMasterKey',
  async (data, api) => {
    try {
      api.dispatch(appKeySlice.actions.loading());
      const response = await axios.post(
        endpoints.CREATE_MASTER_KEY,
        undefined,
        {
          headers: {
            Authorization: `Bearer ${data.authToken}`
          }
        }
      );
      return response.data;
    } catch (err) {
      return api.rejectWithValue(err.response.data.error);
    }
  }
);

export const getAppKey = createAsyncThunk(
  'appKey/getAppKey',
  async (data, api) => {
    try {
      api.dispatch(appKeySlice.actions.loading());
      const response = await axios.get(endpoints.GET_APP_KEY, {
        headers: {
          Authorization: `Bearer ${data.authToken}`
        }
      });
      return response.data;
    } catch (err) {
      return api.rejectWithValue(err.response.data.error);
    }
  }
);

export const createAppKey = createAsyncThunk(
  'bucket/createAppKey',
  async (data, api) => {
    try {
      api.dispatch(appKeySlice.actions.loading());
      const response = await axios.post(
        endpoints.CREATE_APP_KEY,
        {
          name: data.name,
          bucket_id: data.bucket_id,
          expired_date: data.expired_date,
          firename_prefix_restrict: data.firename_prefix_restrict,
          permissions: data.permissions
        },
        {
          headers: {
            Authorization: `Bearer ${data.authToken}`
          }
        }
      );
      const responseData = await {
        key: response.data,
        bucket_id: data.bucketId,
        expired_date: data.expiringDate,
        permissions: data.permissions
      };
      return responseData;
    } catch (error) {
      return api.rejectWithValue(error.response.data.error);
    }
  }
);

export const appKeySlice = createSlice({
  name: 'appKey',
  initialState: initialState,
  reducers: {
    loading: (state, action) => {
      state.isLoading = true;
    },
    clearAppKeyState: (state) => {
      state.isRejected = false;
      state.isFulfiled = false;
      state.isLoggingIn = false;
    }
  },

  extraReducers: {
    [generateMasterKey.fulfilled]: (state, action) => {
      state.isFulfilled = true;
      state.masterKey = action.payload;
      state.isLoading = false;
    },
    [generateMasterKey.rejected]: (state, action) => {
      state.isFulfilled = true;
      state.isLoading = false;
      state.err = action.payload;
    },
    [getAppKey.fulfilled]: (state, action) => {
      state.appKeyList = action.payload;
      state.isLoading = false;
    },
    [getAppKey.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
    [createAppKey.fulfilled]: (state, action) => {
      state.isFulfilled = true;
      state.appKeyList = [...state.appKeyList, action.payload];
      state.isLoading = false;
    },
    [createAppKey.rejected]: (state, action) => {
      state.isRejected = true;
      state.isLoading = false;
      state.err = action.payload;
    }
  }
});

export const { clearAppKeyState } = appKeySlice.actions;
