import React, { useState } from "react";
import AddInput from "./AddInput";

import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = newTodos => {
    const todo = { text: newTodos, id: todos.length };
    setTodos([...todos, todo]);
  };

  const deleteTodo = id => {
    const newList = todos.filter(el => el.id !== id);
    setTodos(newList);
  };

  return (
    <div>
      <AddInput addTodo={addTodo} />
      <TodoList list={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Todo;
