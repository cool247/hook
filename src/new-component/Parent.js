import React, { useState, useCallback } from "react";
import Button from "./Button";
import Counter from "./Counter";

import Title from "./Title";

const Parent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const onAgeChange = () => {
    setAge(age + 1);
  };
  const onSalaryChange = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Counter text="Age" count={age} />
      <Button onClickHandler={onAgeChange}>Increment Age</Button>
      <Counter text="Salary" count={salary} />
      <Button onClickHandler={onSalaryChange}>Increment Salary </Button>
    </div>
  );
};

export default Parent;
