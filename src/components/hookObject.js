import React, { useState } from 'react';

const HookObject = () => {
  const [name, setName] = useState({ firstName: '', lastName: '' });

  const onInputChange = (e, whichName) => {
    if (whichName === 'first') {
      setName({ ...name, firstName: e.target.value });
    } else {
      setName({ ...name, lastName: e.target.value });
    }
  };

  return (
    <div>
      <label htmlfor="firstName">FirstName</label>
      <input
        type="text"
        onChange={(e) => {
          onInputChange(e, 'first');
        }}
        value={name.firstName}
        name="firstName"
        id="firstName"
      ></input>
      <label htmlfor="lastName">FirstName</label>
      <input
        type="text"
        onChange={(e) => {
          onInputChange(e, 'last');
        }}
        value={name.lastName}
        name="lastName"
        id="lastName"
      ></input>
      {JSON.stringify(name)}
    </div>
  );
};

export default HookObject;
