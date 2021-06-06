import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import endpoints from '../../configs/endpoints';

const initialState = {
  selectedBucket: {},
  bucketFileList: [],
  bucketFolderList: [],
  folderChildrenList: [],
  bucketList: [],
  accessKeyList: [],
  signedKeyList: [],
  isLoading: false,
  isFetchingFile: false,
  err: null
};

//data payload: authToken, limit, offset
export const getAllBucket = createAsyncThunk(
  'bucket/getAllBucket',
  async (data, api) => {
    try {
      api.dispatch(bucketSlice.actions.loading());
      const response = await axios.get(
        endpoints.GET_BUCKET + `?limit=${data.limit}&offset=${data.offset}`,
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

//data payload: authToken, name, region
export const createBucket = createAsyncThunk(
  'bucket/createBucket',
  async (data, api) => {
    try {
      api.dispatch(bucketSlice.actions.loading());
      //console.log(data.authToken)
      const response = await axios.post(
        endpoints.CREATE_BUCKET,
        {
          name: data.bucketName,
          is_public: data.isPublic,
          is_encrypted: data.isEncrypted,
          is_object_lock: data.isObjectLock
        },
        {
          headers: {
            Authorization: `Bearer ${data.authToken}`
          }
        }
      );
      const responseData = await {
        bucket: response.data,
        size: 0,
        objectCount: 0
      };
      return responseData;
    } catch (error) {
      return api.rejectWithValue(error.response.data.error);
    }
  }
);

//data payload: authToken, limit, offset
export const deleteBucket = createAsyncThunk(
  'bucket/deleteBucket',
  async (data, api) => {
    try {
      api.dispatch(bucketSlice.actions.loading());
      const response = await axios.delete(
        endpoints.DELETE_BUCKET + `${data.bucketId}`,
        {
          headers: {
            Authorization: `Bearer ${data.authToken}`
          }
        }
      );
      response.data.id = await data.bucketId;
      return response.data;
    } catch (err) {
      return api.rejectWithValue(err.response.data.error);
    }
  }
);

//data payload: authToken, limit, offset, bucketId
export const getBucketFiles = createAsyncThunk(
  'bucket/getBucketFiles',
  async (data, api) => {
    try {
      api.dispatch(bucketSlice.actions.loading());
      const response = await axios.get(
        endpoints.GET_BUCKET_FILE +
          `?limit=${data.limit}&offset=${data.offset}&bucketId=${data.bucketId}`,
        {
          headers: {
            Authorization: `Bearer ${data.authToken}`
          }
        }
      );
      return response.data;
    } catch (error) {
      return api.rejectWithValue(error.response.data.error);
    }
  }
);

//data payload: authToken, limit, offset, bucketId
export const getBucketFolders = createAsyncThunk(
  'bucket/getBucketFolders',
  async (data, api) => {
    try {
      api.dispatch(bucketSlice.actions.loading());
      const response = await axios.get(
        endpoints.GET_BUCKET_FOLDER +
          `?limit=${data.limit}&offset=${data.offset}&bucketId=${data.bucketId}`,
        {
          headers: {
            Authorization: `Bearer ${data.authToken}`
          }
        }
      );
      return response.data;
    } catch (error) {
      return api.rejectWithValue(error.response.data.error);
    }
  }
);

export const getChildrenByPath = createAsyncThunk(
  'bucket/getChildrenByPath',
  async (data, api) => {
    try {
      api.dispatch(bucketSlice.actions.loading());
      const response = await axios.get(
        endpoints.GET_CHILDREN_BY_PATH + `${data.full_path}`,
        {
          headers: {
            Authorization: `Bearer ${data.authToken}`
          }
        }
      );
      return response.data;
    } catch (error) {
      return api.rejectWithValue(error.response.data.error);
    }
  }
);

//data payload: authToken, limit, offset, bucketId
export const createBucketFolder = createAsyncThunk(
  'bucket/createBucketFolder',
  async (data, api) => {
    try {
      api.dispatch(bucketSlice.actions.loading());
      const response = await axios.post(
        endpoints.CREATE_BUCKET_FOLDER,
        {
          name: data.name,
          parent_path: data.parent_path
        },
        {
          headers: {
            Authorization: `Bearer ${data.authToken}`
          }
        }
      );
      response.data = await { ...response.data, type: 'folder' };
      return response.data;
    } catch (error) {
      return api.rejectWithValue(error.response.data.error);
    }
  }
);

export const getBucketAccessKey = createAsyncThunk(
  'bucket/getAllBucketKey',
  async (data, api) => {
    try {
      api.dispatch(bucketSlice.actions.loading());
      const response = await axios.get(
        endpoints.GET_ACCESS_KEY +
          `${data.bucketId}?limit=${data.limit}&offset=${data.offset}`,
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

//data payload: authToken, name, region
export const createBucketKey = createAsyncThunk(
  'bucket/createBucketKey',
  async (data, api) => {
    try {
      api.dispatch(bucketSlice.actions.loading());
      const response = await axios.post(
        endpoints.CREATE_ACCESS_KEY,
        {
          bucket_id: data.bucketId,
          expired_date: data.expiringDate,
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

//data payload: authToken, limit, offset

export const uploadFile = createAsyncThunk(
  'bucket/uploadFile',
  async (data, api) => {
    try {
      api.dispatch(bucketSlice.actions.loading());
      var bodyFormData = new FormData();
      bodyFormData.append('file', data.file);
      bodyFormData.append('path', data.full_path);
      bodyFormData.append('name', data.file.name);
      bodyFormData.append('bucket_id', data.bucketId);

      const response = await axios.post(endpoints.UPLOAD, bodyFormData, {
        headers: {
          Authorization: `Bearer ${data.authToken}`
        }
      });
      response.data = await { ...response.data, type: 'file' };
      return response.data;
    } catch (error) {
      return api.rejectWithValue(error.response.data.error);
    }
  }
);

export const bucketSlice = createSlice({
  name: 'bucket',
  initialState: initialState,
  reducers: {
    loading: (state, action) => {
      state.isLoading = true;
    },
    getBucketList: (state, action) => {
      state.bucketList = action.payload;
    }
  },

  extraReducers: {
    [getAllBucket.fulfilled]: (state, action) => {
      state.bucketList = action.payload;
      state.isLoading = false;
    },
    [getAllBucket.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
    [createBucket.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.bucketList = [...state.bucketList, action.payload];
      alert('Bucket added!');
      state.isLoading = false;
    },
    [createBucket.rejected]: (state, action) => {
      state.isLoading = false;
      alert('Failed to add bucket!');
      state.err = action.payload;
    },
    [deleteBucket.fulfilled]: (state, action) => {
      state.bucketList = state.bucketList.filter(
        (bucket) => bucket.id !== action.payload.id
      );
      alert('Bucket deleted!');
      state.loading = false;
    },
    [deleteBucket.rejected]: (state, action) => {
      state.loading = false;
      state.err = action.payload;
    },

    [getBucketFiles.fulfilled]: (state, action) => {
      state.bucketFileList = action.payload;
      state.isLoading = false;
    },
    [getBucketFiles.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },

    [getBucketFolders.fulfilled]: (state, action) => {
      state.bucketFolderList = action.payload;
      state.isLoading = false;
    },
    [getBucketFolders.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
    [createBucketFolder.fulfilled]: (state, action) => {
      state.folderChildrenList = [...state.folderChildrenList, action.payload];
      state.isLoading = false;
    },
    [createBucketFolder.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },

    [getChildrenByPath.fulfilled]: (state, action) => {
      state.folderChildrenList = action.payload;
      state.isLoading = false;
    },
    [getChildrenByPath.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },

    [getBucketAccessKey.fulfilled]: (state, action) => {
      state.accessKeyList = action.payload;
      state.isLoading = false;
    },
    [getBucketAccessKey.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
    [createBucketKey.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.accessKeyList = [...state.accessKeyList, action.payload];
      state.isLoading = false;
    },
    [createBucketKey.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
    [uploadFile.fulfilled]: (state, action) => {
      state.folderChildrenList = [...state.folderChildrenList, action.payload];
      state.isLoading = false;
    },
    [uploadFile.rejected]: (state, action) => {
      state.err = action.payload;
      state.isLoading = false;
      alert(action.payload);
    }
  }
});
