import { CircularProgress } from '@material-ui/core';
import React from 'react';

const withLoading =
  (Component) =>
  // {
  ({ isLoading, ...props }) =>
    isLoading ? <CircularProgress /> : <Component {...props} />;
// };
// class WithLoading extends React.Component<P & LoadingProps> {
//   render() {
//     const { isLoading, ...props } = this.props;
//     return isLoading ? <CircularProgress /> : <Component {...(props as P)} />;
//   }
// };
export default withLoading;
