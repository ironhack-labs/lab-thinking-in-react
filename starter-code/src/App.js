import React, { Component } from "react";
import "./App.css";
import { data } from "./data.json";
import { ProductTable } from "./components/ProductTable";
import { SearchBar } from "./components/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = { data, search: "", checkbox: false };
  }
  handleSearch = e => {
    const filter = data.filter(el =>
      el.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({
      data: this.state.checkbox ? filter.filter(el => el.stocked) : filter,
      search: e.target.value
    });
  };

  filterCheck = () => {
    const datafiltered = !this.state.checkbox
      ? this.state.data.filter(e => e.stocked)
      : data.filter(e =>
          e.name.toLowerCase().includes(this.state.search.toLocaleLowerCase())
        );
    this.setState({ data: datafiltered, checkbox: !this.state.checkbox });
  };

  render() {
    const { search, data } = this.state;
    return (
      <div className="App">
        <SearchBar func={[this.handleSearch, this.filterCheck]}>
          {search}
        </SearchBar>
        <ProductTable data={data} />
      </div>
    );
  }
}

export default App;
