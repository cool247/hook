import { TextField } from "@material-ui/core";

import React from "react";

export const MUITextField = props => {
  return (
    <TextField variant="outlined" style={{ backgroundColor: "initial" }} {...props} size="small" color="secondary" />
  );
};
