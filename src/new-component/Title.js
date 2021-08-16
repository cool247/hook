import React from "react";

const Title = () => {
  console.log("title");
  return <div>MY Title</div>;
};

export default React.memo(Title);
