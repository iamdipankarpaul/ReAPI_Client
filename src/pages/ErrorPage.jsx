import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <div>{error.message}</div>
    </>
  );
}

export default ErrorPage;
