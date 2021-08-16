import React, { Component } from "react";

export class IntervalClassCounter extends Component {
  constructor(params) {
    super(params);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  tick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return <div style={{ fontSize: "2em" }}>{this.state.count}</div>;
  }
}

export default IntervalClassCounter;
