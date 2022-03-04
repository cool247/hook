import React from 'react';
import { useState } from 'react/cjs/react.development';

const HookArray = () => {
  const [items, setItem] = useState([]);
  const addItemsHandler = () => {
    setItem([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 20 + 1),
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItemsHandler}>Add List</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default HookArray;
