import React from "react";

const Button = (props) => {
  console.log("button", props.children);
  return (
    <div>
      <button onClick={props.onClickHandler}>{props.children}</button>
    </div>
  );
};

export default React.memo(Button);
