import { Button } from "@material-ui/core";

import React from "react";

export const MuiButton = props => {
  return (
    <Button {...props} size="small" color="primary" variant="contained">
      {props.children}
    </Button>
  );
};
