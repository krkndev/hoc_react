import React, { useState } from 'react';
import Login from '../Login/Login';

const withRequireAuth =
  (Component) =>
  ({ ...props }) => {
    const [logedIn, setLogedIn] = useState();
    localStorage.token != undefined ?? setLogedIn(true);

    return <>{!logedIn ? <Login /> : <Component {...props} />}</>;
  };

export default withRequireAuth;
