import React from 'react';
// import './App.css';
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
import MTablePagination from '../pagination';
import { useState } from 'react';
import BasicSearch from '../Mtable';

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
  // State for pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10); // You can set your initial rowsPerPage value
  const [totalRows, setTotalRows] = useState(100); // Total number of rows in your data

  // Function to handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    // You may want to fetch the new page of data here if using an API
  };

  // Function to handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page when changing rowsPerPage
    // You may want to fetch the new page of data here if using an API
  };

  return (
    <div>
      {/* Your data rendering logic goes here */}

      {/* Include the MTablePagination component */}
      <BasicSearch
        
      />
    </div>
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
