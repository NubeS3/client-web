import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Route, Router, Switch, useHistory } from 'react-router';
import FixedSidedbar from '../../../components/Sidebars/FixedSidebar';
import OptionalSidebar from '../../../components/Sidebars/OptionalSidebar';
import paths from '../../../configs/paths';
import store from '../../../store';
import { clearAuthentication } from '../../../store/auth/auth';
import BucketContainer from './Buckets';

const Storage = ({ email, active, ...props }) => {
  const history = useHistory();

  const handleSignOut = () => {
    store.dispatch(clearAuthentication());
    history.push(paths.LOGIN);
  };

  return (
    <main class="bg-transparent dark:bg-gray-800 relative h-screen 2xl:mx-96 lg:mx-60 md:mx-0">
      <div class="flex items-start justify-between">
        <div class="h-screen hidden lg:block relative w-65 ">
          <FixedSidedbar active={active} />
          <OptionalSidebar active={active} />
        </div>
        <div class="flex flex-col w-full md:space-y-4">
          <header class="w-full h-16 flex items-center justify-between">
            <div class="block lg:hidden ml-6">
              <button class="flex p-2 items-center rounded-full bg-white shadow text-gray-500 text-md">
                <svg
                  width="20"
                  height="20"
                  class="text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
            <div class="relative flex flex-col justify-end h-full px-3 md:w-full">
              <div class="relative p-1 flex items-center w-full space-x-4 justify-end">
                <div class="flex items-center text-gray-500 dark:text-white text-md focus:outline-none hover:font-bold">
                  Welcome {email},
                </div>
                <a
                  class="flex dark:text-white text-md hover:font-bold"
                  onClick={handleSignOut}
                >
                  Sign Out
                </a>
              </div>
            </div>
          </header>
          {props.children}
        </div>
      </div>
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
export default connect(mapStateToProps)(Storage);
