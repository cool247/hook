import React, { useContext } from "react";
import { channelContext, nameContext } from "./App";

const Name = () => {
  const name = useContext(nameContext);
  const channel = useContext(channelContext);
  return (
    <div>
      {name}-{channel}
    </div>
  );
};

export default Name;
