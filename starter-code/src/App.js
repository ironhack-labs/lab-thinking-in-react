import React, { Component } from "react";
import "./App.css";
import stock from "./data.json";
import Search from "./Components/Search";
import Table from "./Components/Table";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      word: "",
      checked: false
    };
  }

  componentWillMount() {
    let { data } = this.state;

    data = stock.data;
    this.setState({ data });
  }

  handleChange = e => {
    let { word, data } = this.state;
    word = e.target.value;

    data = stock.data.filter(item => item.name.toLowerCase().includes(word));
    this.setState({ word, data });
  };

  handleChangeBox = e => {
    let { data, checked, word } = this.state;

    checked = !checked;

    if (checked) {
      data = stock.data.filter(
        item => item.stocked === true && item.name.includes(word)
      );
    } else {
      data = stock.data.filter(item => item.name.includes(word));
    }

    this.setState({ data, checked, word });
  };

  render() {
    let { data, category, checked } = this.state;

    return (
      <div className="App">
        <Search
          handleChange={this.handleChange}
          handleChangeBox={this.handleChangeBox}
          checked={checked}
        />
        <Table stock={data} category={category} />
      </div>
    );
  }
}

export default App;
