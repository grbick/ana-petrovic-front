import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError() as any;

  return <div>{error.statusText || error.message}</div>;
};
