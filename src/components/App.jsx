//import FetchAPI from "./fetchAPI";
import React from "react";
import "./App.css";
import clsx from "clsx";
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
import { ThemeProvider } from "@material-ui/core/styles";
import { theme, darkTheme } from "./theme";
import { MuiButton } from "../ComponentLibrary/index";
import { makeStyles } from "@material-ui/core/styles";

import { Switch, Route, Link } from "react-router-dom";

const Home = React.lazy(() => import("../routing/Home"));
const About = React.lazy(() => import("../routing/About"));
const User = React.lazy(() => import("../routing/User"));

// import Home from "../routing/Home";
// import About from "../routing/About";
// import User from "../routing/User";

const useStyles = makeStyles({
  root: {
    width: 100,
  },
  active: {
    backgroundColor: "red",
  },
  notActive: {
    backgroundColor: "green",
  },
});

function App() {
  const classes = useStyles();
  const [isDarkTheme, setDarkTheme] = React.useState(false);

  const errorHandler = (error, errorInfo) => {
    console.log("==============A-(START)=================");
    console.log(error, errorInfo);
    console.log("==============A-(END)====================");
  };

  const handleModeButtonClick = () => {
    setDarkTheme(ps => !ps);
  };

  return (
    <ErrorBoundary FallbackComponent={<div>Something went wrong</div>} onError={errorHandler}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : theme}>
        <div>
          <MuiButton onClick={handleModeButtonClick}>Change theme</MuiButton>
          <Input />
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
          <button
            className={clsx({
              [classes.root]: true,
              [classes.active]: isDarkTheme,
              [classes.notActive]: !isDarkTheme,
            })}
          >
            HI
          </button>
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
