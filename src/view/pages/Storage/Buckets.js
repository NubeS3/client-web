import React, { useState } from 'react';
import { connect } from 'react-redux';
import BucketCard from '../../../components/BucketCard/BucketCard';
import CreateBucketButton from '../../../components/CreateBucketButton';
import StorageFrame from './StorageFrame';

const BucketContainer = ({ email }) => {
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

        <CreateBucketButton />
        <div className="flex flex-col justify-between items-center px-2 bg-gray-100">
          <BucketCard />
          <BucketCard />
          <BucketCard />
          <BucketCard />
        </div>
      </main>
    </StorageFrame>
  );
};

const mapStateToProps = (state) => {
  const email = state.authen.loginEmail;
  console.log(email);
  return {
    email
  };
};
export default connect(mapStateToProps)(BucketContainer);
