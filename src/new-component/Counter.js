import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log("counter", this.props.text);
    return (
      <div>
        {this.props.text} {this.props.count}
      </div>
    );
  }
}

export default React.memo(Counter);
