import React from 'react';

const withLocalSpinner =
  (Component) =>
  // {
  ({ isLoading, ...props }) =>
    isLoading ? (
      <div class="flex flex-row justify-center items-center w-full mx-0">
        <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20"></div>
      </div>
    ) : (
      <Component {...props} />
    );
export default withLocalSpinner;
