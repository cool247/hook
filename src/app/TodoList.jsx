import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ list, deleteTodo }) => {
  const deleteTodoHandler = (id) => {
    deleteTodo(id);
  };

  return (
    <div>
      <ul style={{ listStyleType: 'none' }}>
        {list.map((el) => (
          <li key={el.id}>
            {el.text}
            <button
              onClick={() => deleteTodoHandler(el.id)}
              style={{
                color: 'tomato',
                cursor: 'pointer',
                border: 'none',
                outline: 'none',
                backgroundColor: 'black',
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

TodoList.prototype = {
  list: PropTypes.array.isRequired,
  deleteTodo: PropTypes.number.isRequired,
};