import React, { useContext } from "react";
import { CountContext } from "./App";

const ComponentD = () => {
  const count = useContext(CountContext);
  return (
    <div>
      <button onClick={() => count.dispatch({ type: "increment" })}>
        increment
      </button>
      <button onClick={() => count.dispatch({ type: "decrement" })}>
        decrement
      </button>
      <button onClick={() => count.dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default ComponentD;
