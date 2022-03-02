import React, { Component, useLayoutEffect } from "react";
import Color from "./Color";
class ColorGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      // colors: [ "#93827F","#92b4a7","#14bdeb","#3B3561","#ead94c","#f1f1ab","	#FF0000"]
    };
  }

  addcolor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    // let items=this.state.colors
    // var item = items[Math.floor(Math.random()*items.length)];

    this.setState({ value: [color, ...this.state.value] });
  };

  render() {
    return (
      <div>
        <button onClick={this.addcolor}>Add Color</button>
        <div>
          {this.state.value.map((c, i) => (
            <Color key={i} title={c} />
          ))}
        </div>
      </div>
    );
  }
}

export default ColorGenerator;
