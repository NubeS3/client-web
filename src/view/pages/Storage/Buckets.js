import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import BucketCard from '../../../components/BucketCard/BucketCard';
import CreateBucketButton from '../../../components/CreateBucketButton';
import StorageFrame from './StorageFrame';
import { getAllBucket } from '../../../store/userStorage/bucket';
import store from '../../../store';
const BucketContainer = ({ email, bucketList, authToken }) => {
  useEffect(() => {
    store.dispatch(getAllBucket({ authToken: authToken }));
    return () => {};
  }, []);
  return (
    <StorageFrame active="bucket">
      <main className="h-screen lg:block relative w-full">
        <header className="w-full h-16 flex items-center justify-between">
          <div className="relative flex flex-col justify-start h-full px-3 md:w-full">
            <div className="relative p-1 flex items-center w-full space-x-4 justify-start">
              <div className="flex items-end text-black dark:text-white text-3xl">
                Nubes3 Cloud Storage Buckets
              </div>
            </div>
          </div>
        </header>

        <CreateBucketButton authToken={authToken} />
        <div className="flex flex-col justify-between items-center py-2 px-2 bg-gray-100">
          {bucketList
            ? bucketList.map((item, index) => <BucketCard item={item} />)
            : null}
          <BucketCard />
        </div>
      </main>
    </StorageFrame>
  );
};

const mapStateToProps = (state) => {
  const email = state.authen.loginEmail;
  const bucketList = state.bucket.bucketList;
  const authToken = state.authen.authToken;
  return {
    email,
    bucketList,
    authToken
  };
};
export default connect(mapStateToProps)(BucketContainer);
