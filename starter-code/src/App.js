import React, { Component } from "react";
import Main from "./components/Main";
import data from "./data.json";
import "./App.css";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     products: data.data
  //   };
  // }
  render() {
    return (
      <div className="App">
        <Main products={data.data} />
      </div>
    );
  }
}

export default App;
