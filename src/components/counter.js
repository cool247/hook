import React from 'react';
import CounterHigherOrder from './counterHigherOrder';

const Counter = (props) => {
  return (
    <div>
      <p>You clicked {props.count} times</p>
      <button onClick={props.increment}>Click me</button>
    </div>
  );
};

export default CounterHigherOrder(Counter);
