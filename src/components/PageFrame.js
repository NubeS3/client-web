import React from 'react';
import AppBar from './Header/AppBar';
import FixedSidedbar from './Sidebars/FixedSidebar';
import OptionalSidebar from './Sidebars/OptionalSidebar';
import AppKeyCard from './ApplicationKeyCard/AppKeyCard';

const PageFrame = (props) => {
  return (
    <>
      <AppBar />
      <AppKeyCard></AppKeyCard>
      <div {...props}>{props.children}</div>
    </>
  );
};

export default PageFrame;
