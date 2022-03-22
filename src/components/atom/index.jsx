import React from "react";
import { useAtom } from "jotai";
//
import { inputAtom } from "../../Atom/atoms";
import { ShowText } from "./showText";

export default function Example() {
  const [input, setInput] = useAtom(inputAtom);

  return (
    <>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <ShowText />
    </>
  );
}
