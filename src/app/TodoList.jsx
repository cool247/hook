import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
const TodoList = ({ list, deleteTodo }) => {
  const deleteTodoHandler = id => {
    _.debounce(function () {
      deleteTodo(id);
    }, 500)();
  };

  return (
    <div>
      <ul style={{ listStyleType: "none", textAlign: "center", maxWidth: 500 }}>
        {list.map(el => (
          <li key={el.id} style={{ textAlign: "right" }}>
            {el.text}
            <button
              onClick={() => deleteTodoHandler(el.id)}
              style={{
                color: "tomato",
                cursor: "pointer",
                border: "none",
                outline: "none",
                backgroundColor: "black",
              }}
            >
              X
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
