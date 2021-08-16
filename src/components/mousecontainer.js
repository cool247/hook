import React, { useState } from "react";
import MouseMove from "./mouseMove";

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Display</button>
      {display && <MouseMove />}
    </div>
  );
};

export default MouseContainer;
