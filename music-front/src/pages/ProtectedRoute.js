import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
// import { useUserContext } from '../context/user_context'
import { useGlobalContext } from '../context';
import Dashboard from './Dashboard';

const PrivateRoute = ({ children }) => {
  const { user } = useGlobalContext();
  console.log('From privateRoute: ', user);
  return user ? children : <Navigate to='/login' />;
  // <Route
  //   {...rest}
  //   render={() => {
  //     return user ? children : <Navigate to='/' />;
  //   }}
  // />
};
export default PrivateRoute;
