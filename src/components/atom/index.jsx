import React from "react";
import { useAtom } from "jotai";
//
import { inputAtom, themeAtom } from "../../Atom/atoms";
import { ShowText } from "./showText";
import { Grid, Box } from "@material-ui/core";

import { MUITextField, MuiButton } from "../../ComponentLibrary/index";

export default function Example() {
  const [input, setInput] = useAtom(inputAtom);
  const [isDarkTheme, setDarkTheme] = useAtom(themeAtom);

  const handleThemeChange = () => {
    setDarkTheme(ps => !ps);
  };

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      style={{ padding: 16, backgroundColor: isDarkTheme ? "darkgray" : "orange" }}
    >
      <Grid item style={{ marginRight: 16 }}>
        <MUITextField value={input} onChange={e => setInput(e.target.value)} />
      </Grid>

      <Grid item>
        <MuiButton onClick={handleThemeChange}>Change theme</MuiButton>
      </Grid>
      <Grid item xs={12}>
        <ShowText />
      </Grid>
    </Grid>
  );
}
