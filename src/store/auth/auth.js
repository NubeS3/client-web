import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import endpoints from '../../configs/endpoints';
import localStorageKeys from '../../configs/localStorageKeys';

const initialState = {
  isValidating: false,
  isValidAuthentication: false,
  loginEmail: localStorage.getItem(localStorageKeys.LOGIN_EMAIL) || '',
  isAdmin: false,
  authToken: localStorage.getItem(localStorageKeys.TOKEN) || null,
  rfToken: null,
  isLoggingIn: false,
  err: null
};

export const loginEmail = createAsyncThunk(
  'authen/loginEmail',
  async (data, api) => {
    localStorage.setItem(localStorageKeys.LOGIN_EMAIL, data.email);
    api.dispatch(authenSlice.actions.loginEmail(data.email));
    return data.email;
  }
);

export const login = createAsyncThunk('authen/login', async (data, api) => {
  try {
    api.dispatch(authenSlice.actions.loggingIn());
    const response = await axios.post(endpoints.LOGIN, {
      email: data.email,
      password: data.password
    });
    return response.data;
  } catch (err) {
    return api.rejectWithValue(err.response.data.error);
  }
});

export const verifyAuthentication = createAsyncThunk(
  'authen/verifyAuthentication',
  async (data, api) => {
    try {
      api.dispatch(authenSlice.actions.validating());
      // const response = await axios.post(endpoints.AUTHENTICATION, undefined, {
      //   headers: {
      //     Authorization: data.authToken,
      //   },
      // });
      if (localStorage.getItem(localStorageKeys.TOKEN)) return true;
      return false;
    } catch (err) {
      return api.rejectWithValue(err.response.data.error);
    }
  }
);

export const clearAuthentication = createAsyncThunk(
  'authen/clearAuthentication',
  async (data, api) => {
    try {
      const response = {};
      //await axios.delete(endpoints.LOGOUT, {
      //   headers: {
      //     Authorization: data.authToken,
      //   },
      // });
      return response.data;
    } catch (err) {
      return api.rejectWithValue(err.response.data.error);
    }
  }
);

export const authenSlice = createSlice({
  name: 'authen',
  initialState: initialState,
  reducers: {
    validating: (state, action) => {
      state.isValidating = true;
    },
    loggingIn: (state, action) => {
      state.isLoggingIn = true;
    },
    reset: (state, action) => {
      state.isValidating = false;
      state.isValidAuthentication = false;
      state.authToken = null;
      state.rfToken = null;
      state.isLoggingIn = false;
      state.err = null;
    },
    loginEmail: (state, action) => {
      state.loginEmail = action.payload || '';
    }
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      localStorage.setItem(localStorageKeys.TOKEN, action.payload.accessToken);
      localStorage.setItem(
        localStorageKeys.RFTOKEN,
        action.payload.refreshToken
      );
      state.isAdmin = false;
      state.isValidating = false;
      state.isValidAuthentication = true;
      state.isLoggingIn = false;
      state.authToken = action.payload.accessToken;
      state.rfToken = action.payload.refreshToken;
      state.err = null;
    },
    [login.rejected]: (state, action) => {
      console.log(action.payload);
      state.isLoggingIn = false;
      state.err = action.payload;
    },
    [verifyAuthentication.fulfilled]: (state, action) => {
      state.isValidating = false;
      state.isValidAuthentication = action.payload;
      // state.authToken = "1234asdf";
      // state.rfToken = "1234asdf";
      state.err = null;
    },
    [verifyAuthentication.rejected]: (state, action) => {
      localStorage.removeItem(localStorageKeys.TOKEN);
      localStorage.removeItem(localStorageKeys.RFTOKEN);
      state.isAdmin = false;
      state.isValidating = false;
      state.isValidAuthentication = false;
      state.authToken = null;
      state.rfToken = null;
      state.err = action.payload;
    },
    [clearAuthentication.fulfilled]: (state, action) => {
      localStorage.removeItem(localStorageKeys.TOKEN);
      localStorage.removeItem(localStorageKeys.RFTOKEN);
      state.isAdmin = false;
      state.isValidating = false;
      state.isValidAuthentication = false;
      state.authToken = null;
      state.rfToken = null;
      state.err = null;
    },
    [clearAuthentication.rejected]: (state, action) => {
      localStorage.removeItem(localStorageKeys.TOKEN);
      localStorage.removeItem(localStorageKeys.RFTOKEN);
      state.isAdmin = false;
      state.isValidating = false;
      state.isValidAuthentication = false;
      state.authToken = null;
      state.rfToken = null;
      state.err = action.payload;
    }
  }
});
