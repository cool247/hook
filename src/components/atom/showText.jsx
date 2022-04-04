import React from "react";
import { useAtom } from "jotai";
import { Typography } from "@material-ui/core";
//
import { inputAtom } from "../../Atom/atoms";

export function ShowText() {
  const [input] = useAtom(inputAtom);

  return <Typography>{input}</Typography>;
}
