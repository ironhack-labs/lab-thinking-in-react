import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      isOnStock: false
    };
  }

  handleSearch(search) {
    this.setState({
      search: search
    });
  }

  handleClick() {
    this.setState({
      isOnStock: !this.state.isOnStock
    });
  }

  render() {
    return (
      <div className="container">
        <h1>IronStore</h1>
        <SearchBar
          search={this.state.search}
          isOnStock={this.state.onStock}
          onSearch={search => this.handleSearch(search)}
          onClick={() => this.handleClick()}
        />
        <ProductTable search={this.state.search} isOnStock={this.state.isOnStock} />
      </div>
    );
  }
}

export default App;
