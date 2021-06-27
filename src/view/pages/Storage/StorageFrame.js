import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import AuthPageFrame from '../../../components/AuthPageFrame';
import FixedSidedbar from '../../../components/Sidebars/FixedSidebar';
import OptionalSidebar from '../../../components/Sidebars/OptionalSidebar';
import paths from '../../../configs/paths';
import store from '../../../store';
import { clearAuthentication } from '../../../store/auth/auth';

const Storage = ({ email, active, ...props }) => {
  const history = useHistory();

  const handleSignOut = () => {
    store.dispatch(clearAuthentication());
    history.push(paths.LOGIN);
  };
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <AuthPageFrame>
      <div className="bg-transparent dark:bg-gray-800 relative h-screen 2xl:mx-80 xl:mx-40 lg:mx-12">
        <div className="flex items-start justify-between">
          <div className="h-screen hidden mt-16 lg:block relative w-65">
            <FixedSidedbar active={active} />
            <OptionalSidebar active={active} />
          </div>
          <div className="flex flex-col w-full md:space-y-4">
            <header className="w-full flex items-center justify-between">
              <div className="block lg:hidden ml-6">
                <button className="flex p-2 items-center rounded-full bg-white shadow text-gray-500 text-md">
                  <svg
                    width="20"
                    height="20"
                    className="text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                  </svg>
                </button>
              </div>
              <div className="relative flex flex-col justify-end h-full px-3 mt-2 md:w-full">
                <div className="relative p-1 flex items-center w-full space-x-4 justify-end">
                  <div className="flex items-center text-gray-500 dark:text-white text-md focus:outline-none hover:font-bold">
                    Welcome {email},
                  </div>
                  <p
                    className="flex dark:text-white text-md text-blue-500 hover:font-bold"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </p>
                </div>
              </div>
            </header>
            {props.children}
          </div>
        </div>
      </div>
    </AuthPageFrame>
  );
};

const mapStateToProps = (state) => {
  const email = state.authen.loginEmail;
  return {
    email
  };
};
export default connect(mapStateToProps)(Storage);
