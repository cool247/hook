//import FetchAPI from "./fetchAPI";
import './App.css';
// import ComponentA from "./componentA";
// import ComponentC from "./componentC";
// import ComponentB from "./componentB";
// import React, { useReducer } from "react";
// import Title from "../new-component/Title";
// import Parent from "../new-component/Parent";
// import Counter from "../useHook/Counter";
// import Todo from "../app/Todo";
// import Home from "./Home";
// import Testing from "../routing/buttons";
// import { Switch, Route, Link } from "react-router-dom";
import Test from '../react-hook-form';
// import ChatExample from './Chart';
// export const nameContext = React.createContext();
// export const channelContext = React.createContext();
// export const CountContext = React.createContext();
// const initialState = { count: 0 };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     case "reset":
//       return { count: 0 };

//     default:
//       return state;
//   }
// };

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);

  return (
    <div className="App">
      {/* <ChatExample /> */}
      <Test />
      {/* <Todo /> */}
      {/* <Test id="abc" /> */}
      {/* <Mtable /> */}
      {/* <Testing /> */}
      {/* <Switch>
        <Route exact path="/"></Route>
        <Route path="/cm/users" component={Users}></Route>
        <Route path="/cm/about">
          <About />
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
