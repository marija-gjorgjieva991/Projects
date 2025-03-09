import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="err">
      Error! Go to <Link to="/">Home Page</Link>
    </div>
  );
};
