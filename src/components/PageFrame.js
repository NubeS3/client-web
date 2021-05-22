import React from 'react';
import AppBar from './Header/AppBar';
import FixedSidedbar from './Sidebars/FixedSidebar';
import OptionalSidebar from './Sidebars/OptionalSidebar';

const PageFrame = (props) => {
  return (
    <>
      <AppBar />
      <div {...props}>{props.children}</div>
    </>
  );
};

export default PageFrame;
