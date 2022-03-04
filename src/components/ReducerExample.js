import React, { useReducer } from "react";

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.value };
    case "decrement":
      return { count: state.count - action.value };
    case "increment5":
      return { count: state.count + action.value };
    case "decrement5":
      return { count: state.count - action.value };

    case "reset":
      return { count: action.value };

    default:
      throw new Error();
  }
};

const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div>
      Count:{state.count}
      <button
        onClick={() => {
          dispatch({ type: "increment", value: 1 });
        }}
      >
        increment by 1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 1 });
        }}
      >
        decrement by 1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increment5", value: 5 });
        }}
      >
        increment by 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement5", value: 5 });
        }}
      >
        decrement by 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset", value: 0 });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default ReducerExample;
