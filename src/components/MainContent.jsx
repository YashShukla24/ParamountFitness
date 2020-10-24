import React, { Component } from "react";
import ToDoItems from "./ToDoItems";
import DemoDate from "./DemoDate";
class MainContent extends Component {
  state = {};
  render() {
    return (
      <div>
          <DemoDate/>
        <h1>Home</h1>
        <ToDoItems name="delhi" />
        <ToDoItems name="indore" />
        <ToDoItems name="dewas" />
        <ToDoItems name="ujjain" />
      </div>
    );
  }
}

export default MainContent;
