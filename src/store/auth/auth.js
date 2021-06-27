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
  isFulfilled: false,
  isRejected: false,
  activeStatus: 200,
  err: { error: '' }
};

export const loginEmail = createAsyncThunk(
  'authen/loginEmail',
  async (data, api) => {
    localStorage.setItem(localStorageKeys.LOGIN_EMAIL, data.email);
    api.dispatch(authenSlice.actions.loginEmail(data.email));
    return data.email;
  }
);

export const changeLoginEmail = createAsyncThunk(
  'authen/changeLoginEmail',
  async (data, api) => {
    localStorage.removeItem(localStorageKeys.LOGIN_EMAIL);
    api.dispatch(authenSlice.actions.loginEmail(''));
    return '';
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

export const getActiveStatus = createAsyncThunk(
  'authen/getActiveStatus',
  async (data, api) => {
    try {
      api.dispatch(authenSlice.actions.loggingIn());
      const response = await axios.get(endpoints.GET_ACTIVE_STATUS, {
        headers: {
          Authorization: `Bearer ${data.authToken}`
        }
      });
      return response.data;
    } catch (err) {
      return api.rejectWithValue(err.response.status);
    }
  }
);

export const verifyEmail = createAsyncThunk(
  'authen/verifyEmail',
  async (data, api) => {
    try {
      api.dispatch(authenSlice.actions.loggingIn());
      const response = await axios.get(
        endpoints.VERIFY_EMAIL + `/${data.email}`
      );
      return response.data;
    } catch (err) {
      return api.rejectWithValue(err.response.data.error);
    }
  }
);

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
    },
    clearState: (state) => {
      state.isRejected = false;
      state.isFulfiled = false;
      state.isLoggingIn = false;
    }
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.isLoggingIn = false;
      state.isFulfilled = true;
      localStorage.setItem(localStorageKeys.TOKEN, action.payload.accessToken);
      localStorage.setItem(
        localStorageKeys.RFTOKEN,
        action.payload.refreshToken
      );
      state.isAdmin = false;
      state.isValidating = false;
      state.isValidAuthentication = true;
      state.authToken = action.payload.accessToken;
      state.rfToken = action.payload.refreshToken;
      state.err = null;
    },
    [login.rejected]: (state, action) => {
      state.isLoggingIn = false;
      state.isRejected = true;
      state.err = { error: action.payload };
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
    },
    [loginEmail.fulfilled]: (state, action) => {
      state.loginEmail = action.payload;
    },
    [loginEmail.rejected]: (state, action) => {
      state.err = { error: action.payload };
    },
    [changeLoginEmail.fulfilled]: (state, action) => {
      state.loginEmail = action.payload;
    },
    [changeLoginEmail.rejected]: (state, action) => {
      state.err = { error: action.payload };
    },
    [getActiveStatus.fulfilled]: (state, action) => {
      state.activeStatus = 200;
    },
    [getActiveStatus.rejected]: (state, action) => {
      state.activeStatus = action.payload;
      state.err = action.payload;
    }
  }
});

export const { clearState } = authenSlice.actions;
