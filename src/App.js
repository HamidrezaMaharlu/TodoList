import React, { Component } from "react";
import { observer } from "mobx-react";
import "./App.css";
import TodoEntry from "./components/TodoEntry";
import TodoItems from "./components/TodoItems";
import TodoFooter from "./components/TodoFooter";

@observer
class App extends Component {
  render() {
    return [
      <div id="todoapp" className="todoapp">
        <TodoEntry />
        <TodoItems />
        <TodoFooter />
      </div>,
      <footer className="info">
        <p>
          Written by <a href="https://linkedin.com/in/hamidreza-maharlu-4537867b">Hamidreza Maharlu</a>
        </p>
        <p>
          Project of <a href="https://maktabkhooneh.org">Maktabkhooneh</a>
        </p>
      </footer>,
    ];
  }
}

export default App;
