import React from 'react';
import { Route } from 'react-router-dom';
import { Login } from '../../sections';

const AuthRoute = () => {
  return (
    <Route>
      <Route path="/admin-login" element={<Login />} />
    </Route>
  );
};

export default AuthRoute;
