import { createTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

export const theme = createTheme({
  palette: {
    primary: {
      light: purple[50],
      main: purple[300],
      dark: purple[500],
    },
    secondary: {
      light: green[200],
      main: green[300],
      dark: green[500],
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#202221",
      main: "#007",
    },
  },
  typography: {
    body1: {
      color: "#fff",
    },
    body2: {
      color: "#fff",
    },
  },
});
