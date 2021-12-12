import React, { useState, useEffect, useRef } from 'react';
import { Button, Typography } from '@material-ui/core';
import CountUp from 'react-countup';

const Count = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  });

  const prevCount = prevCountRef.current;

  return (
    <>
      <Typography align="center">
        <CountUp start={prevCount} end={count} duration={0.75} />
      </Typography>
      <Button variant="outlined" color="primary" onClick={() => setCount((ps) => ps + 10)}>
        Count UP
      </Button>
    </>
  );
};

export default Count;
