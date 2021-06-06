import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import paths from '../../../configs/paths';
import { useHistory } from 'react-router';
import store from '../../../store';
import { connect } from 'react-redux';
import {
  generateMasterKey,
  clearAppKeyState
} from '../../../store/userStorage/appKey';

const GeneratingMasterKeyCard = ({
  authToken,
  open,
  setShowCard,
  onCancel,
  isFulfilled,
  isRejected
}) => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      isGenerate: false
    },
    onSubmit: (values) => {
      store.dispatch(generateMasterKey({ authToken: authToken }));
    }
  });

  useEffect(() => {
    if (isFulfilled) {
      setShowCard(true);
      store.dispatch(clearAppKeyState());
      onCancel();
    }
    if (isRejected) {
      // log error
      store.dispatch(clearAppKeyState());
      onCancel();
    }
    return () => {};
  }, [isFulfilled, isRejected]);

  return (
    <dialog open={open}>
      <div className="fixed z-10 inset-0 overflow-auto bg-gray-500 bg-opacity-70 rounded-lg">
        <div className="flex flex-col mx-auto mt-20 justify-center max-w-2xl px-4 bg-white shadow rounded-sm my-auto text-gray-600">
          <h1 className="w-full text-center text-3xl py-6">Are You Sure?</h1>
          <hr />
          <div className="mt-6 mb-6 px-4 mx-auto">
            <p>Generating a new key will cancel the old key.</p>
            {/* <form onSubmit={formik.handleSubmit}></form> */}
          </div>
          <hr />
          <div className="col-span-2">
            <div className="flex justify-end mt-4 pb-4 pr-6">
              <button
                className="rounded-sm py-2 px-4 mr-2 border border-transparent text-sm font-medium text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={formik.handleSubmit}
              >
                Yes! Generate Master Key
              </button>
              <button
                className="rounded-sm py-2 px-4 border border-transparent text-sm font-medium text-white bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={onCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

const mapStateToProps = (state) => {
  const authToken = state.authen.authToken;
  const isFulfilled = state.appKey.isFulfilled;
  const isRejected = state.appKey.isRejected;
  return {
    authToken,
    isFulfilled,
    isRejected
  };
};
export default connect(mapStateToProps)(GeneratingMasterKeyCard);
