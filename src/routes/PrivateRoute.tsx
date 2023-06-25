import useDeviceUID from "hooks/useDeviceUID";
import { FunctionComponent, ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { Path } from "static/enums/Path";

interface PrivateRouteProps {
  component: ReactElement;
}

const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({ component }) => {
  const { isDeviceUID } = useDeviceUID();

  return (
    <>{isDeviceUID ? component : <Navigate to={Path.SHOP} replace={true} />}</>
  );
};

export default PrivateRoute;
