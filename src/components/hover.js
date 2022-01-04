import React from 'react';
import CounterHigherOrder from './counterHigherOrder';

const Hover = (prop) => {
  return (
    <div>
      <p>You hover {prop.count} many times</p>
      <p onMouseOver={prop.increment}>Hover me to get Notice</p>
    </div>
  );
};

export default CounterHigherOrder(Hover);
