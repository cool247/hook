import React, { useState, useMemo } from "react";

const Counter = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const isEven = useMemo(() => {
    let i = 0;

    while (i < 20000) i++;
    return countOne % 2 === 0;
  }, [countOne]);

  const incrementOne = () => {
    setCountOne(countOne + 1);
  };
  const incrementTwo = () => {
    setCountTwo(countTwo + 1);
  };

  return (
    <div>
      <button onClick={incrementOne}>click {countOne}</button>
      {isEven ? "even" : "odd"}
      <div>
        <button onClick={incrementTwo}>click On Two {countTwo}</button>
      </div>
    </div>
  );
};

export default Counter;
