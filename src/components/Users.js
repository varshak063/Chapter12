import { useState } from "react";

export const Users = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="userscard">
        <h4>Name : {name}</h4>
        <h6>Location : Pune</h6>
        <p>Click count: {count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click
        </button>
      </div>
    </>
  );
};
