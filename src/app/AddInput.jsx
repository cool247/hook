import React, { useState } from "react";
import PropTypes from "prop-types";

const AddInput = ({ addTodo }) => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = e => {
    setInputText(e.target.value);
  };

  const appendChildHandler = e => {
    e.preventDefault();
    addTodo(inputText);
    setInputText("");
  };

  return (
    <form onSubmit={appendChildHandler}>
      <input
        type="text"
        name="TODO"
        placeholder="Add Todos"
        maxLength={30}
        minLength={5}
        required
        onChange={handleInputChange}
        value={inputText}
      />
    </form>
  );
};
export default AddInput;

AddInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
