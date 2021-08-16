import React, { useState } from "react";

const AddList = ({ addTodo }) => {
  const [inputText, setInputText] = useState("");

  //INPUT
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  //OnCLICK
  const appendChildHandler = () => {
    addTodo(inputText);
    setInputText("");
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} value={inputText}></input>
      <button onClick={appendChildHandler}>ADD</button>
    </div>
  );
};

export default AddList;
