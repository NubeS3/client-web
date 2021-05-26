import React, { useState } from 'react';
import { connect } from 'react-redux';
import AddApplicationKey from '../../../components/Dialog/ApplicationKey';
import MasterKeyCard from '../../../components/MasterKeyCard/MasterKeyCard';
import StorageFrame from './StorageFrame';

const AppKeyContainer = ({ email }) => {
  return (
    <StorageFrame active="appkey">
      <div className="h-screen lg:block relative w-full">
        <header className="w-full h-16 flex items-center justify-between">
          <div className="relative flex flex-col justify-start h-full px-3 md:w-full">
            <div className="relative p-1 flex items-center w-full space-x-4 justify-start">
              <div className="flex items-end text-black dark:text-white text-2xl">
                Application Key
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col justify-center items-center py-2 px-2 bg-gray-100">
          <MasterKeyCard />
          {/* <AddApplicationKey /> */}
        </div>
      </div>
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
export default connect(mapStateToProps)(AppKeyContainer);
