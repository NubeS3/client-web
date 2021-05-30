import { configureStore } from '@reduxjs/toolkit';
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

const store = configureStore({
  reducer: {
    signUp: signUpSlice.reducer,
    authen: authenSlice.reducer,
    adminAuthen: adminAuthenSlice.reducer,

    upload: uploadSlice.reducer,
    download: downloadSlice.reducer,
    bucket: bucketSlice.reducer,
    appKey: appKeySlice.reducer,
    bandwidthReport: bandwidthReportSlice.reducer,

    adminManage: adminManageSlice.reducer,
    userManage: userManageSlice.reducer,
    requestLogManage: requestLogManageSlice.reducer
  }
});

export default store;
