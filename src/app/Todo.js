import React, { useState } from "react";
import AddList from "./AddList";

import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodos) => {
    if (newTodos.length > 0) {
      let todo = {
        text: newTodos,
        id: todos.length,
      };
      setTodos([...todos, todo]);
    } else {
      alert("enter some message");
    }
  };
  const deleteTodo = (id) => {
    let newList = todos.filter((el) => el.id !== id);
    setTodos(newList);
  };

  return (
    <div>
      <TodoList list={todos} deleteTodo={deleteTodo} />
      <AddList addTodo={addTodo} />
    </div>
  );
};

export default Todo;
