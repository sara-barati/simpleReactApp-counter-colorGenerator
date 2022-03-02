import React, { Component, useLayoutEffect } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.list.map((item,i) => {
          return (
            <button
              key={i}
              onClick={item.clickHanler}
              style={{
                color: "red",
                background: "tosi",
                padding: "10px",
                margin: "50px",
            
              }}
            >
              {item.title}
            </button>
          );
        })}
      </div>
    );
  }
}
export default Button;
