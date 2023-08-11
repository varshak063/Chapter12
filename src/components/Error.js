import { useRouteError } from "react-router-dom";

export const Error = () => {
  const err = useRouteError();
  return (
    <>
      <div>
        <h1>Something went wrong!!</h1>
        <h4>
          {err.status} :{err.statusText}
        </h4>
      </div>
    </>
  );
};
