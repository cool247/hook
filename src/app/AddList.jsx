import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddList = ({ addTodo }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const appendChildHandler = () => {
    addTodo(inputText);
    setInputText('');
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} value={inputText} />
      <button onClick={appendChildHandler}>ADD</button>
    </div>
  );
};
export default AddList;

AddList.propTypes = {
  addTodo: PropTypes.string.isRequired,
};
