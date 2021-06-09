import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import BucketCard from '../../../components/BucketCard/BucketCard';
import CreateBucketButton from '../../../components/CreateBucketButton';
import StorageFrame from './StorageFrame';
import { getAllBucket } from '../../../store/userStorage/bucket';
import store from '../../../store';

const BucketContainer = ({ bucketList = [], authToken }) => {
  useEffect(() => {
    console.log('Bucket');
    store.dispatch(
      getAllBucket({ authToken: authToken, limit: 10, offset: 0 })
    );
    return () => {};
  }, []);
  return (
    <StorageFrame active="bucket">
      <div className="h-screen lg:block relative w-full">
        <header className="w-full h-16 flex items-center justify-between">
          <div className="relative flex flex-col justify-start h-full md:w-full">
            <div className="relative flex items-center w-full space-x-4 justify-start">
              <div className="flex items-end text-black dark:text-white text-3xl">
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
                // console.log(item.bucket)
              )
            : null}
        </div>
      </div>
    </StorageFrame>
  );
};

const mapStateToProps = (state) => {
  const email = state.authen.loginEmail;
  const bucketList = state.bucket.bucketList;
  const authToken = state.authen.authToken;
  const isLoading = state.bucket.isLoading;
  console.log(bucketList);
  return {
    isLoading,
    email,
    bucketList,
    authToken
  };
};
export default connect(mapStateToProps)(BucketContainer);
