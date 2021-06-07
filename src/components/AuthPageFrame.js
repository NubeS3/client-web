import React, { useEffect } from 'react';
import AuthAppBar from '../components/Header/AuthAppBar';
const AuthPageFrame = (props) => {
  return (
    <>
      <AuthAppBar />
      <div {...props}>{props.children}</div>
    </>
  );
};

export default AuthPageFrame;
