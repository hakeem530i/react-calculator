import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      screen: 0
    };
  }

  handleChange() {}
  handleNumClick(num) {
    this.setState({ screen: num });
    //alert(num);
  }
  buttonRender() {
    let numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
    let buttonList = numbers.map(num => {
      return (
        <button
          key={num}
          onClick={() => this.handleNumClick(num)}
          className="w-33 f2 bg-animate hover-bg-black hover-white bg-transparent bn"
        >
          {num}
        </button>
      );
    });
    return buttonList;
  }
  render() {
    return (
      <div className="App">
        <div id="calc-container" className="container center pa2 vh-80">
          <input
            className="w-100 f1 tr"
            type="text"
            value={this.state.screen}
          />
          {this.buttonRender()}
        </div>
      </div>
    );
  }
}

export default App;
