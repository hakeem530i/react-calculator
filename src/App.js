import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      screen: "",
      stack: 0
    };
  }

  handleChange() {
    alert("Changed");
  }
  handleButtonClick(key) {
    // this.setState({ screen: num });
    //alert(num);

    //Detect operator
    switch (key) {
      case "x":
        //Save the items to the stack
        this.setState({ stack: `${this.state.screen}*` },()=>{
          console.log("Stack", `${this.state.stack}`);
        });
        
        break;
      case "-":
        console.log("Subtract");
        break;
      case "/":
        console.log("Divide");
        break;
      case "C":
        this.setState({ screen: "" });
        break;
      default:
        this.setState(prevState => {
          return { screen: `${prevState.screen}` + `${key}` };
        });
        break;
    }
  }
  buttonRender() {
    let numbers = [
      "AC",
      "+/-",
      "%",
      "÷",
      7,
      8,
      9,
      "x",
      4,
      5,
      6,
      "+",
      1,
      2,
      3,
      "-",
      "neg",
      0,
      ".",
      "="
    ];
    let buttonList = numbers.map(num => {
      return (
        <button
          key={num}
          onClick={() => this.handleButtonClick(num)}
          className="w-25 vh-20 calc-button f2 bg-animate hover-bg-black hover-white bg-transparent bn"
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
        <div id="calc-container" className="center">
          <input
            id="calc-display"
            className="w-100 f1 tr h-25"
            type="text"
            onChange={this.handleChange}
            value={this.state.screen === "" ? "0" : this.state.screen}
          />
          <div className="vh-75">
            {this.buttonRender()} 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
