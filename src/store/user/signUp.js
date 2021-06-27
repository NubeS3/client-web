import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import endpoints from '../../configs/endpoints';

const initialState = {
  loading: false,
  done: false,
  err: null,
  username: '',
  message: '',
  isVerified: false
};

export const signUp = createAsyncThunk('signUp/signUp', async (data, api) => {
  try {
    api.dispatch(signUpSlice.actions.loading());
    const response = await axios.post(endpoints.REGISTER, {
      password: data.password,
      email: data.email
    });

    if (response) {
      api.dispatch(signUpSlice.actions.sendSignUpRequest(data.username));
    }

    return response.data;
  } catch (err) {
    return api.rejectWithValue(err.response.data.error);
  }
});

export const confirmOTP = createAsyncThunk(
  'signUp/confirmOTP',
  async (data, api) => {
    try {
      const response = await axios.post(endpoints.CONFIRM_OTP, {
        email: data.email,
        otp: data.otp
      });

      if (!response) {
        return api.rejectWithValue(response.data.error);
      }
      return response.data;
    } catch (err) {
      return api.rejectWithValue(err.response.data.error);
    }
  }
);

export const resendOTP = createAsyncThunk(
  'signUp/resendOTP',
  async (data, api) => {
    try {
      const response = await axios.put(endpoints.RESEND_OTP, {
        email: data.email
      });
      return response.data;
    } catch (err) {
      return api.rejectWithValue(err.response.data.error);
    }
  }
);

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState: initialState,
  reducers: {
    loading: (state, action) => {
      state.loading = true;
    },
    reset: (state, action) => {
      state.loading = false;
      state.done = false;
      state.err = null;
    },
    sendSignUpRequest: (state, action) => {
      state.username = action.payload;
    }
  },
  extraReducers: {
    [signUp.fulfilled]: (state, action) => {
      state.loading = false;
      state.done = true;
      state.err = null;
    },
    [signUp.rejected]: (state, action) => {
      state.loading = false;
      state.err = action.payload;
    },

    [confirmOTP.fulfilled]: (state, action) => {
      state.isVerified = true;
      state.message = action.payload;
      state.loading = false;
      state.done = true;
      state.err = null;
    },
    [confirmOTP.rejected]: (state, action) => {
      state.loading = false;
      state.err = action.payload;
    },

    [resendOTP.fulfilled]: (state, action) => {
      state.message = action.payload;
      state.loading = false;
      state.done = true;
      state.err = null;
    },
    [resendOTP.rejected]: (state, action) => {
      state.loading = false;
      state.err = action.payload;
    }
  }
});

export const signUpActions = signUpSlice.actions;
