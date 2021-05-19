import React from 'react';
import { connect } from 'react-redux';
import './style.css';

const Landing = (props) => {
  return (
    // Appbar component
    <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
      <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center">
        <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-8">
          <div className="flex flex-col">
            <h1 className="font-light w-full uppercase text-center text-4xl sm:text-5xl dark:text-white text-gray-800">
              The Easy, Affordable, Trusted Storage Cloud
            </h1>
            <h2 className="font-light max-w-2xl mx-auto w-full text-xl dark:text-white text-gray-500 text-center py-8">
              Grow your business with easy to use object storage that doesn't
              break your budget.
            </h2>
            <div className="flex items-center justify-center mt-4">
              <a
                href="#"
                className="uppercase py-2 px-4 bg-gray-800 border-2 border-transparent text-white text-md mr-4 hover:bg-gray-900"
              >
                Get started
              </a>
              <a
                href="#"
                className="uppercase py-2 px-4 bg-transparent border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md"
              >
                Documentation
              </a>
            </div>
          </div>
          <div className="block w-full mx-auto mt-9 md:mt-7 relative">
            <img
              src="https://www.backblaze.com/pics/home-page-b2-cloud.png"
              className="max-w-xs md:max-w-2xl m-auto"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  isValidAuthentication: state.authen.isValidAuthentication
});

export default connect(mapStateToProps)(Landing);
