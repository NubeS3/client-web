import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import endpoints from '../../configs/endpoints';

const initialState = {
  file: null,
  path: '',
  name: '',
  ttl: 0,
  err: null,
  isLoading: false,
  downloadDone: false,
  downloadFailed: false
};

export const downloadSingle = createAsyncThunk(
  'storage/downloadSingle',
  async (data, api) => {
    try {
      api.dispatch(downloadSlice.actions.downloading());
      const response = await axios.get(
        endpoints.DOWNLOAD + `${data.full_path}`,
        {
          responseType: 'arraybuffer',
          headers: {
            Authorization: `Bearer ${data.authToken}`
          }
        }
      );
      const url = window.URL.createObjectURL(
        new Blob([response.data], { type: 'application/octet-stream' })
      );
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', data.fileName);
      document.body.appendChild(link);
      link.click();
      return response.data;
    } catch (error) {
      return api.rejectWithValue(error.response.data.error);
    }
  }
);

export const downloadSlice = createSlice({
  name: 'download',
  initialState: initialState,
  reducers: {
    downloading: (state, action) => {
      state.isLoading = true;
    },
    clearDownloadState: (state, action) => {
      state.isLoading = false;
      state.downloadDone = false;
      state.downloadFailed = false;
    },
    updateProgress: (state, action) => {
      state.progressInfos = state.progressInfos.map((item) => {
        // find the item with the same name
        if (item.fileName === action.payload.fileName) {
          return action.payload;
        }
        return item;
      });
    }
  },
  extraReducers: {
    [downloadSingle.fulfilled]: (state, action) => {
      state.downloadDone = true;
      state.isLoading = false;
    },
    [downloadSingle.rejected]: (state, action) => {
      state.downloadFailed = true;
      state.err = action.payload;
      state.isLoading = false;
    }
  }
});

export const downloadActions = downloadSlice.actions;
