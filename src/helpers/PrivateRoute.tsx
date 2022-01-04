import { ReactElement } from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import { RouteList } from "../App";

const PrivateRoute = (): ReactElement => {
  const auth = useAuth();

  return auth.user ? <Outlet /> : <Navigate to={RouteList.ONBOARDING} />;
};

export default PrivateRoute;
