import React, { useState, useEffect } from "react";

const MouseMove = () => {
  const [mousePosition, setMousePosition] = useState({ x: "", y: "" });

  const logMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    console.log("hih");
  };

  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("removed  event listener");
      window.removeEventListener("mousemove", logMousePosition);
      //remove subscription timeer and async funclean
    };
  }, []);

  return <div>{JSON.stringify(mousePosition)}</div>;
};

export default MouseMove;
