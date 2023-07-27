import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="w-1/2 h-40 p-2 rounded bg-blue-100 text-center mt-40 mx-auto border-2">
      <h1 className="text-[40px] text-slate-500">Oops! {error.status} error</h1>
      <p className="italic">Sorry, an unexpected error has occured.</p>
      <p className="text-red-400">
        Page {error.statusText || error.message} {error.data}
      </p>
    </div>
  );
};

export default ErrorPage;
