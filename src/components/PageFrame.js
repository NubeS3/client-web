import React from 'react';
import AppBar from './Header/AppBar';

const PageFrame = (props) => {
  return (
    <>
      <AppBar />
      <div {...props}>{props.children}</div>
    </>
  );
};

export default PageFrame;
