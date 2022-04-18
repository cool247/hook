import React from "react";
import { useAtom } from "jotai";
//
import { inputAtom } from "../../Atom/atoms";
import { ShowText } from "./showText";
import { Grid, Box } from "@material-ui/core";

import { MUITextField, MuiButton } from "../../ComponentLibrary/index";

export default function Example() {
  const [input, setInput] = useAtom(inputAtom);

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      style={{ padding: 16, backgroundColor: "orange" }}
    >
      <Grid item>
        <MUITextField value={input} onChange={e => setInput(e.target.value)} />
      </Grid>

      <Grid item>
        <MuiButton>Click me</MuiButton>
      </Grid>
      <Grid item xs={12}>
        <ShowText />
      </Grid>
    </Grid>
  );
}
