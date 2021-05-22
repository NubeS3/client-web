import React, { useState } from 'react';
import { connect } from 'react-redux';

const BucketContainer = ({ email }) => {
  return (
    <main class="h-screen hidden lg:block relative w-full">
      <header class="w-full h-16 z-40 flex items-center justify-between">
        <div class="relative z-20 flex flex-col justify-start h-full px-3 md:w-full">
          <div class="relative p-1 flex items-center w-full space-x-4 justify-start">
            <div class="flex items-center text-black dark:text-white text-3xl">
              Nubes3 Cloud Storage Buckets
            </div>
          </div>
        </div>
      </header>
    </main>
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
