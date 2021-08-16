import React, { Component } from "react";

class ClassCounterOne extends Component {
  state = { count: 0 };

  componentDidMount() {
    document.title = `clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `clicked ${this.state.count} times`;
  }
  incrementHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    console.log("hi");
    return (
      <div>
        <button onClick={this.incrementHandler}>
          Click {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounterOne;

// import React, { useEffect, useState } from "react";

// const ClassCounterOne = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `click ${count} times`;
//   }, [count]);
//   const incrementHandler = () => {
//     setCount((ps) => ps + 1);
//   };
//   console.log("hi");
//   return (
//     <div>
//       <button onClick={incrementHandler}>Click {count} times</button>
//     </div>
//   );
// };

// export default ClassCounterOne;
