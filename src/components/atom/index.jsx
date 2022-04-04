import React from "react";
import { useAtom } from "jotai";
//
import { inputAtom } from "../../Atom/atoms";
import { ShowText } from "./showText";
import { Grid, Box } from "@material-ui/core";

import { MUITextField, MuiButton } from "../../ComponentLibrary/index";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({}));

export default function Example() {
  const [input, setInput] = useAtom(inputAtom);

  return (
    <Box bgcolor={"primary.light"}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
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
    </Box>
  );
}
