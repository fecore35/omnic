import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Path } from "static/enums/Path";

interface NotFoundProps {}

const NotFoundPage: FunctionComponent<NotFoundProps> = () => {
  return (
    <>
      <h2>404</h2>
      <Link to={Path.HOME}>Повернутися на головну</Link>
    </>
  );
};

export default NotFoundPage;
