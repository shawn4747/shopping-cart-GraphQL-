import React, { PureComponent } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Section from "./components/Section";

class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <Section />
        </Router>
      </div>
    );
  }
}

export default App;
