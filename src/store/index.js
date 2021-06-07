import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit';
import { authenSlice } from './auth/auth';
import { adminAuthenSlice } from './auth/admin_auth';
import { signUpSlice } from './user/signUp';
import { uploadSlice } from './userStorage/upload';
import { downloadSlice } from './userStorage/download';
import { bucketSlice } from './userStorage/bucket';
import { appKeySlice } from './userStorage/appKey';
import { userManageSlice } from './admin/user';
import { adminManageSlice } from './admin/admin';
import { requestLogManageSlice } from './admin/requestLog';
import { bandwidthReportSlice } from './user/bandwidthReport';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const rootPersistConfig = {
//   key: 'root',
//   storage
// };

const bucketPersistConfig = {
  key: 'bucket',
  storage,
  whitelist: ['bucketList']
};

const appKeyPersistConfig = {
  key: 'appKey',
  storage,
  whitelist: ['recipeCat', 'userRecipeList', 'userInfo', 'isLoggedIn']
};

const persistedReducer = combineReducers({
  signUp: signUpSlice.reducer,
  authen: authenSlice.reducer,
  adminAuthen: adminAuthenSlice.reducer,

  upload: uploadSlice.reducer,
  download: downloadSlice.reducer,
  bucket: persistReducer(bucketPersistConfig, bucketSlice.reducer),
  appKey: persistReducer(appKeyPersistConfig, appKeySlice.reducer),
  bandwidthReport: bandwidthReportSlice.reducer,

  adminManage: adminManageSlice.reducer,
  userManage: userManageSlice.reducer,
  requestLogManage: requestLogManageSlice.reducer
});

// const persistedReducer = persistReducer(rootPersistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [...getDefaultMiddleware({ serializableCheck: false })]
});

export default store;
