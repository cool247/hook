import React, { useState } from "react";

const HookObject = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const onInputChange = (e, whichName) => {
    if (whichName === "first") {
      setName({ ...name, firstName: e.target.value });
    } else {
      setName({ ...name, lastName: e.target.value });
    }
  };

  return (
    <div>
      <labek htmlfor="firstname">FirstName</labek>
      <input
        type="text"
        onChange={(e) => {
          onInputChange(e, "first");
        }}
        value={name.firstName}
        name="firstname"
        id="firstname"
      ></input>
      <labek htmlfor="lastname">FirstName</labek>
      <input
        type="text"
        onChange={(e) => {
          onInputChange(e, "last");
        }}
        value={name.lastName}
        name="lastname"
        id="lastname"
      ></input>
      {JSON.stringify(name)}
    </div>
  );
};

export default HookObject;
