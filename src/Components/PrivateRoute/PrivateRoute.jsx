import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation()

  if (loading)
    return (
      <Loading/>
    );
  return <div>{user ? children : <Navigate state={location.pathname} to="/auth/login"></Navigate>}</div>;
};

export default PrivateRoute;
