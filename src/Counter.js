import React, { Component, useLayoutEffect } from "react";
import Button from "./Button";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      data: [
        { title: "increment", clickHanler: this.increment },
        {
          title: "decrement",
          clickHanler: this.decrement,
        },
      ],
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    // this.reset = this.reset.bind(this)
  }
  increment = () => {
    let vl = this.state.counter;
    vl++;
    this.setState({ counter: vl });
  };

  decrement = () => {
    let x = this.state.counter;
    if (x > 0) {
      x--;
      this.setState({ counter: x });
    }
  };

  render() {
    return (
      <div>
        <div style={{ position: "absolute", left: "13%", top: "2%" }}>
          {this.state.counter}
        </div>
        <Button list={this.state.data} />
      </div>
    );
  }
}
export default Counter;
