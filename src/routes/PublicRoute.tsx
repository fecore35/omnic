import { FunctionComponent, ReactElement } from "react";

interface PublicRouteProps {
  component: ReactElement;
}

const PublicRoute: FunctionComponent<PublicRouteProps> = ({ component }) => {
  return <>{component}</>;
};

export default PublicRoute;
