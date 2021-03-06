const BASE = `${process.env.REACT_APP_BACK_END_URL}`;

const endpoints = {
  BASE,
  AUTHENTICATION: `${BASE}/users/verify-authentication`,
  REGISTER: `${BASE}/users/signup`,
  VERIFY_EMAIL: `${BASE}/users/validate-email`,
  GET_ACTIVE_STATUS: `${BASE}/users/check-active-status`,
  LOGIN: `${BASE}/users/signin`,
  LOGOUT: `${BASE}/users/signout`,
  CONFIRM_OTP: `${BASE}/users/confirm-otp`,
  RESEND_OTP: `${BASE}/users/send-otp`,
  UPLOAD: `${BASE}/auth/files/upload`,
  DOWNLOAD: `${BASE}/auth/files/download`,
  GET_BUCKET: `${BASE}/auth/buckets/all`,
  CREATE_BUCKET: `${BASE}/auth/buckets/`,
  UPDATE_BUCKET_SETTINGS: `${BASE}/auth/buckets`,

  CREATE_BUCKET_FOLDER: `${BASE}/auth/folders/`,
  DELETE_BUCKET: `${BASE}/auth/buckets/`,
  GET_BUCKET_FILE: `${BASE}/auth/files/all`,
  GET_BUCKET_FOLDER: `${BASE}/auth/folders/all`,
  GET_FILE_DETAILS: `${BASE}/auth/files/detail`,
  DELETE_FILE: `${BASE}/auth/files`,
  DELETE_FOLDER: `${BASE}/auth/folders`,
  GET_SIGNED_KEY: `${BASE}/auth/keyPairs/all/`,

  GET_APP_KEY: `${BASE}/auth/accessKey/`,
  CREATE_APP_KEY: `${BASE}/auth/accessKey/app`,
  GET_MASTER_KEY: `${BASE}/auth/accessKey/master`,
  CREATE_MASTER_KEY: `${BASE}/auth/accessKey/master`,
  DELETE_APP_KEY: `${BASE}/auth/accessKey`,

  CREATE_ACCESS_KEY: `${BASE}/auth/accessKey/`,
  DELETE_ACCESS_KEY: `${BASE}/auth/accessKey`,
  CREATE_SIGNED_KEY: `${BASE}/auth/keyPairs/`,
  DELETE_SIGNED_KEY: `${BASE}/auth/keyPairs`,
  GET_CHILDREN_BY_PATH: `${BASE}/auth/folders/child/all`,
  COUNT_ALL_ACCESS_KEY_REQ: `${BASE}/auth/accessKey/use-count/all`,
  COUNT_ALL_SIGNED_KEY_REQ: `${BASE}/auth/keyPairs/use-count/all`,
  COUNT_DATE_ACCESS_KEY_REQ: `${BASE}/auth/accessKey/use-count/date`,
  COUNT_DATE_SIGNED_KEY_REQ: `${BASE}/auth/keyPairs/use-count/date`,
  GET_TOTAL_BANDWIDTH: `${BASE}/users/bandwidth-report`,
  GET_AVG_OBJECT_COUNT: `${BASE}/users/report/object-count`,
  GET_AVG_GB_STORED: `${BASE}/users/report/size`,
  GET_REPORT: `${BASE}/users/request-report`,

  LOGIN_ADMIN: `${BASE}/admin/signin`,
  GET_ALL_USER: `${BASE}/admin/auth/users-list`,
  GET_ALL_ADMIN: `${BASE}/admin/auth/admins-list`,
  ADD_MOD: `${BASE}/admin/auth/mod`,
  BAN_USER: `${BASE}/admin/auth/ban-user`,
  BAN_MOD: `${BASE}/admin/auth/disable-mod`,
  GET_AUTH_REQ_LOG: `${BASE}/admin/auth/req-log/auth`, // ?limit=10&offset=0&from=0&to=1619958070&uid=1av3
  GET_ACCESS_KEY_REQ_LOG: `${BASE}/admin/auth/req-log/accessKey`, // ?limit=10&offset=0&from=0&to=1619958070&key=1av3
  GET_SIGNED_KEY_REQ_LOG: `${BASE}/admin/auth/req-log/signed`, // ?limit=10&offset=0&from=0&to=1619958070&public=1av3
  ADMIN_COUNT_ACCESS_KEY_REQ: `${BASE}/admin/auth/req-log/count/accessKey`, // ?limit=10&offset=0&from=0&to=1619958070&key=1av3
  ADMIN_COUNT_SIGNED_KEY_REQ: `${BASE}/admin/auth/req-log/count/signed`, // ?limit=10&offset=0&from=0&to=1619958070&public=1av3
  ADMIN_GET_USER_BUCKET: `${BASE}/admin/auth/buckets`,
  ADMIN_GET_BUCKET_ACCESS_KEY: `${BASE}/admin/auth/accessKey`,
  ADMIN_GET_BUCKET_SIGNED_KEY: `${BASE}/admin/auth/keyPair`
};

export default endpoints;
