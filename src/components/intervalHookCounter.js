import React, { useState, useEffect } from "react";

const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((ps) => ps + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{count}</div>;
};

export default IntervalHookCounter;
