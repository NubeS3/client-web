import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import BucketCard from '../../../components/BucketCard/BucketCard';
import CreateBucketButton from '../../../components/CreateBucketButton';
import StorageFrame from './StorageFrame';
import { getAllBucket } from '../../../store/userStorage/bucket';
import store from '../../../store';
import { clearAuthentication, getActiveStatus } from '../../../store/auth/auth';
import RequireEmailVerification from '../../../components/Dialog/EmailVerification/RequireEmailVerification';
import { useHistory } from 'react-router-dom';
import paths from '../../../configs/paths';

const BucketContainer = ({
  bucketList = [],
  authToken,
  email,
  activeStatus
}) => {
  const [showRequireEmail, setShowRequireEmail] = useState(false);
  const history = useHistory();

  useEffect(() => {
    store.dispatch(getActiveStatus({ authToken: authToken }));
    store.dispatch(
      getAllBucket({ authToken: authToken, limit: 10, offset: 0 })
    );
    return () => {};
  }, []);

  useEffect(() => {
    if (activeStatus === 401) {
      setShowRequireEmail(true);
    }
    if (activeStatus === 403) {
      alert('this account has been banned');
      store.dispatch(clearAuthentication());
      history.push(paths.LOGIN);
    }
    return () => {};
  }, [activeStatus]);

  return (
    <StorageFrame active="bucket">
      <RequireEmailVerification open={showRequireEmail} />
      <div className="h-screen lg:block relative w-full">
        <header className="w-full h-16 flex items-center justify-between">
          <div className="relative flex flex-col justify-start h-full md:w-full">
            <div className="relative flex items-center w-full space-x-4 justify-start">
              <div className="flex items-end text-black dark:text-white text-4xl">
                Nubes3 Cloud Storage Buckets
              </div>
            </div>
          </div>
        </header>
        <p className="text-gray-500 dark:text-white text-md my-10">
          With Backblaze B2 Cloud Storage you can store data in the Backblaze
          Cloud. Any size, file type or number of files. New to B2 Cloud
          Storage? Check out the{' '}
          <a className="text-blue-500 cursor-pointer">Nubes Starter Guide</a>.
        </p>

        <CreateBucketButton authToken={authToken} />
        <div className="flex flex-col justify-between items-center py-2 px-2 bg-gray-100">
          {bucketList
            ? bucketList.map(
                (item) => <BucketCard item={item} authToken={authToken} />
              )
            : null}
        </div>
      </div>
    </StorageFrame>
  );
};

const mapStateToProps = (state) => {
  const email = state.authen.loginEmail;
  const activeStatus = state.authen.activeStatus;
  const bucketList = state.bucket.bucketList;
  const authToken = state.authen.authToken;
  const isLoading = state.bucket.isLoading;

  return {
    isLoading,
    email,
    bucketList,
    authToken,
    activeStatus
  };
};
export default connect(mapStateToProps)(BucketContainer);
