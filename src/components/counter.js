import React from "react";
import CounterHigerOrder from "./counterHigerOrder";

const Counter = (props) => {
  return (
    <div>
      <p>You clicked {props.count} times</p>
      <button onClick={props.increment}>Click me</button>
    </div>
  );
};

export default CounterHigerOrder(Counter);
