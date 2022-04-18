import React from "react";
import "./App.css";
import clsx from "clsx";
import Input from "./atom";
import { ErrorBoundary } from "react-error-boundary";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme, darkTheme } from "./theme";
import { MuiButton } from "../ComponentLibrary/index";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Container } from "@material-ui/core";
import DataGrid from "./DataGrid";

import { Switch, Route, Link } from "react-router-dom";
import Sound from "../Asserts/song.wav";
import Facebook from "../app/facebook.png";
import Insta from "../app/insta.webp";
import Twitter from "../app/twitter.png";

const Home = React.lazy(() => import("../routing/Home"));
const About = React.lazy(() => import("../routing/About"));
const User = React.lazy(() => import("../routing/User"));

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
  typography: {
    fontSize: 18,
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  image: {
    [theme.breakpoints.up("md")]: {
      height: 70,
    },

    [theme.breakpoints.down("md")]: {
      height: 50,
    },
    [theme.breakpoints.down("sm")]: {
      height: 30,
    },
  },
});

function App() {
  // const audioRef = React.useRef();
  const classes = useStyles();
  const [isDarkTheme, setDarkTheme] = React.useState(false);

  // const [songState, setSongState] = React.useState(false);

  const errorHandler = (error, errorInfo) => {
    console.log("==============A-(START)=================");
    console.log(error, errorInfo);
    console.log("==============A-(END)===================");
  };

  const handleModeButtonClick = () => {
    setDarkTheme(ps => !ps);
  };

  // const handlePlaySong = () => {
  //   setSongState(ps => !ps);
  //   if (!songState) {
  //     audioRef.current.play().catch(e => console.log(e));
  //   } else {
  //     audioRef.current.pause();
  //     console.log("his");
  //   }
  //   console.log(audioRef.current.currentTime, "audioRef");
  // };

  if (process.env.REACT_DEV_MODE !== "development") console.log = () => {};

  return (
    <ErrorBoundary FallbackComponent={<div>Something went wrong</div>} onError={errorHandler}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : theme}>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="space-between"
          style={{ backgroundColor: "rebeccapurple" }}
        >
          <Grid item xs={1} sm={1} align="center">
            <img alt="instagram" src={Insta} className={classes.image} />
          </Grid>
          {/* title */}
          <Grid item>
            <Grid container spacing={1} justifyContent="center" alignItems="center">
              <Grid item>
                <img alt="twitter" src={Twitter} className={classes.image} />
              </Grid>
              <Grid item align="center">
                <Typography className={classes.typography} style={{ color: "#fff" }}>
                  <div>A-HMIS</div>
                  <div>Heath Management Institute System</div>
                  <div>(AYUSH)</div>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* icon */}
          <Grid item xs={1} sm={1} align="center">
            <img alt="Facebook" src={Facebook} className={classes.image} />
          </Grid>
        </Grid>
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
        {/* <button
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
            Play Song
            <button type="button" onClick={handlePlaySong}>
              {!songState ? "play" : "pause"}
            </button>
          </div> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/about" component={About} />
        </Switch>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;


// export function inputRestrict(e, removeListRegex) {
//   const input = e.target;
//   const start = input.selectionStart,
//     end = input.selectionEnd;
//   const initialLen = input.value.length;
//   input.value = input.value.replace(removeListRegex, "");
//   const lengthDifference = input.value.length - initialLen;
//   if (lengthDifference) {
//     const newStart = start + lengthDifference;
//     const newEnd = end + lengthDifference;
//     input.setSelectionRange(newStart, newEnd);
//   }
// }
// export function inputToUpper(e) {
//   const input = e.target,
//     start = input.selectionStart,
//     end = input.selectionEnd;
//   input.value = input.value.toLocaleUpperCase();
//   input.value = input.value.endsWith(" ") ? input.value.trim() + " " : input.value.trim();
//   input.setSelectionRange(start, end);
// }
// export function inputTrim(e) {
//   const input = e.target,
//     start = input.selectionStart,
//     end = input.selectionEnd;
//   input.value = input.value.endsWith(" ") ? input.value.trim() + " " : input.value.trim();
//   input.setSelectionRange(start, end);
// }
// 4:58
// email(e) {
//     //alphanumericdotampersand
//     inputRestrict(e, /[^@a-zA-Z-_.\d]/g);
//   },
//   remarks(e) {
//     inputRestrict(e, /[^-a-zA-Z(),&. \d]/g);
//   },