//import FetchAPI from "./fetchAPI";
import React, { Suspense } from "react";
import "./App.css";
import { CircularProgress } from "@material-ui/core";
// import ComponentA from "./componentA";
// import ComponentC from "./componentC";
// import ComponentB from "./componentB";
// import React, { useReducer } from "react";
// import Title from "../new-component/Title";
// import Parent from "../new-component/Parent";
// import Counter from "../useHook/Counter";
// import Todo from "../app";
import Input from "./atom";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "./Fallback";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme, darkTheme } from "./theme";
import { MuiButton } from "../ComponentLibrary/index";

// import Home from "./Home";
// import Testing from "../routing/buttons";
import { Switch, Route, Link } from "react-router-dom";
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

const Home = React.lazy(() => import("../routing/Home"));
const About = React.lazy(() => import("../routing/About"));
const User = React.lazy(() => import("../routing/User"));

function App() {
  const [isDarkTheme, setDarkTheme] = React.useState(false);

  const errorHandler = (error, errorInfo) => {
    console.log("==============A-HMIS(START)=================");
    console.log(error, errorInfo);
    console.log("==============A-HMIS(END)====================");
  };

  console.log(isDarkTheme);

  const handleModeButtonClick = () => {
    setDarkTheme(ps => !ps);
  };

  return (
    <ErrorBoundary FallbackComponent={<div>Something went wrong</div>} onError={errorHandler}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : theme}>
        <div>
          <MuiButton onClick={handleModeButtonClick}>Change theme</MuiButton>
          {/* <Input /> */}

          {/* <ChatExample /> */}
          {/* <Test /> */}
          {/* <Count /> */}
          <Input />
          {/* <Todo /> */}
          {/* <Test id="abc" /> */}
          {/* <AutoCompleteVirtualize /> */}
          {/* <Chart /> */}
          {/* <DatePicker /> */}
          {/* <Mtable /> */}
          {/* <Testing /> */}
          <div>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/user">USER</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
            </ul>
          </div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user" component={User} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
