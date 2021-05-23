import React, { useState } from 'react';
import { connect } from 'react-redux';
import BucketCard from '../../../components/BucketCard/BucketCard';
import CreateBucket from '../../../components/Dialog/Bucket/CreateBucket';
import CreateBucketButton from '../../../components/CreateBucketButton';

const BucketContainer = ({ email }) => {
  return (
    <>
      <main className="h-screen hidden lg:block relative w-full">
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
      </main>
    </>
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
