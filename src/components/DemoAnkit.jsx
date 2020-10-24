import React, { Component, Fragment } from "react";
class DemoAnkit extends Component {
  state = {
    name: "ankit",
    age: 25
  };
  render() {
    return (
      <Fragment>
        <h1>Hello from {this.state.name}</h1>
        <h2>my age is {this.state.age}</h2>
      </Fragment>
    );
  }
}

export default DemoAnkit;
