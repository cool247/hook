import React from 'react';
import './App.css';
import clsx from 'clsx';
import Input from './atom';
import { useAtom } from 'jotai';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme, darkTheme } from './theme';
import { MuiButton } from '../ComponentLibrary/index';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Container } from '@material-ui/core';
import DataGrid from './DataGrid';

import { Switch, Route, Link } from 'react-router-dom';
import Sound from '../Asserts/song.wav';
import Facebook from '../app/facebook.png';
import Insta from '../app/insta.webp';
import Twitter from '../app/twitter.png';
import { themeAtom } from '../Atom/atoms';
import ReactHook from '../react-hook-form';

const Home = React.lazy(() => import('../routing/Home'));
const About = React.lazy(() => import('../routing/About'));
const User = React.lazy(() => import('../routing/User'));

const useStyles = makeStyles({
  root: {
    width: 100,
  },
  active: {
    backgroundColor: 'red',
  },
  notActive: {
    backgroundColor: 'green',
  },
  typography: {
    fontSize: 18,
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    },
  },
  image: {
    [theme.breakpoints.up('md')]: {
      height: 50,
    },

    [theme.breakpoints.down('md')]: {
      height: 40,
    },
    [theme.breakpoints.down('sm')]: {
      height: 30,
    },
  },
});

function App() {
  const audioRef = React.useRef();
  const classes = useStyles();

  const [songState, setSongState] = React.useState(false);
  const [isDarkTheme] = useAtom(themeAtom);

  const errorHandler = (error, errorInfo) => {
    console.log('==============A-(START)=================');
    console.log(error, errorInfo);
    console.log('==============A-(END)===================');
  };

  const handlePlaySong = () => {
    setSongState((ps) => !ps);
    if (!songState) {
      audioRef.current.play().catch((e) => console.log(e));
    } else {
      audioRef.current.pause();
      console.log('his');
    }
    console.log(audioRef.current.currentTime, 'audioRef');
  };

  const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

  function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

    console.log(parseJwt(jwt),"jwt")

  if (process.env.REACT_DEV_MODE !== 'development') console.log = () => {};

  return <ReactHook />;
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
