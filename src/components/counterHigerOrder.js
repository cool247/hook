import React, { useState } from "react";

//component accept another component as a parameter
// and return a new component
const CounterHigerOrder = (OignalComponent) => {
  //new component
  const NewComponent = () => {
    const [count, setCount] = useState(0);
    const counterIncrementHandler = () => {
      setCount((ps) => ps + 1);
    };
    //which return a feature rich component
    return (
      <OignalComponent
        increment={counterIncrementHandler}
        count={count}
      ></OignalComponent>
    );
  };

  return NewComponent;
};

export default CounterHigerOrder;
