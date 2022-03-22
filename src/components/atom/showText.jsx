import React from "react";
import { useAtom } from "jotai";
//
import { inputAtom } from "../../Atom/atoms";

export function ShowText() {
  const [input] = useAtom(inputAtom);

  return <h2>{input}</h2>;
}
