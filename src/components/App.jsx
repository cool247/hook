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
import Sound from "../Asserts/song.wav";

const Home = React.lazy(() => import("../routing/Home"));
const About = React.lazy(() => import("../routing/About"));
const User = React.lazy(() => import("../routing/User"));
// const Song = React.lazy(() => import("../../public/song.wav"));

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
  const audioRef = React.useRef();
  const classes = useStyles();
  const [isDarkTheme, setDarkTheme] = React.useState(false);

  const [songState, setSongState] = React.useState(false);

  const errorHandler = (error, errorInfo) => {
    console.log("==============A-(START)=================");
    console.log(error, errorInfo);
    console.log("==============A-(END)===================");
  };

  const handleModeButtonClick = () => {
    setDarkTheme(ps => !ps);
  };

  const handlePlaySong = () => {
    setSongState(ps => !ps);
    if (!songState) {
      audioRef.current.play().catch(e => console.log(e));
    } else {
      audioRef.current.pause();
      console.log("his");
    }
    console.log(audioRef.current.currentTime, "audioRef");
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
          <audio ref={audioRef} src={Sound} controls />
          <div>
            Play Song{" "}
            <button type="button" onClick={handlePlaySong}>
              {!songState ? "play" : "pause"}
            </button>
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
