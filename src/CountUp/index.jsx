import React, { useState, useEffect, useRef } from 'react';
import { Button, Typography } from '@material-ui/core';
import CountUp from 'react-countup';

function usePrevious(value) {
  const ref = useRef(0);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const Count = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <>
      <Typography align="center">
        <CountUp start={prevCount} end={count} duration={0.75} />
      </Typography>
      <Button
        style={{ marginRight: '8px' }}
        variant="outlined"
        color="primary"
        onClick={() => setCount((ps) => ps + 10)}
      >
        Count UP
      </Button>
      <Button variant="outlined" color="primary" onClick={() => setCount((ps) => ps - 10)}>
        Count DOWN
      </Button>
    </>
  );
};

export default Count;
