//import FetchAPI from "./fetchAPI";
import React from "react";
import "./App.css";
// import ComponentA from "./componentA";
// import ComponentC from "./componentC";
// import ComponentB from "./componentB";
// import React, { useReducer } from "react";
// import Title from "../new-component/Title";
// import Parent from "../new-component/Parent";
// import Counter from "../useHook/Counter";
import Todo from "../app";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "./Fallback";
// import Home from "./Home";
// import Testing from "../routing/buttons";
// import { Switch, Route, Link } from "react-router-dom";
// import Test from "../react-hook-form";
// import AutoCompleteVirtualize from '../AutoCompleteVirtualize';
// import Menu from './Menu';
// import Chart from './Chart';
// import DatePicker from '../DatePicker';
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
// import Count from '../CountUp';

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);

  const errorHandler = (error, errorInfo) => {
    console.log(
      "==================================================A-HMIS(START)========================================================"
    );
    console.log(error, errorInfo);
    console.log(
      "==================================================A-HMIS(END)========================================================"
    );
  };

  return (
    <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
      <div className="App">
        {/* <Input /> */}

        {/* <ChatExample /> */}
        {/* <Test /> */}
        {/* <Count /> */}
        <Todo />
        {/* <Test id="abc" /> */}
        {/* <AutoCompleteVirtualize /> */}
        {/* <Chart /> */}
        {/* <DatePicker /> */}
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
    </ErrorBoundary>
  );
}

export default App;
