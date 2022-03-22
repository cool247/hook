import React from "react";
import wentWrongImg from "./WentWrong.jpg";

export function Fallback() {
  return (
    <div>
      <img
        alt="Something Went Wrong"
        src={wentWrongImg}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          minWidth: "100%",

          minHeight: "100%",
        }}
      />
    </div>
  );
}
