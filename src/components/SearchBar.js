import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    input: '',
    checked: false,
  };
  handleSearch = (event) => {
    const input = event.target.value;
    // pass input value to the parent component -> lift the state here
    this.props.filterProducts(input);

    this.setState({
      input,
    });
  };
  handleCheckbox = (event) => {
    // pass input value to the parent component -> lift the state here
    this.props.filterCheckBox(event.target.checked);
    this.setState({
      checked: !this.state.checked,
    });
  };

  render() {
    return (
      <div className="SearchComponent">
        <div className="SearchBar">
          <label htmlFor="search">Search</label>
          <input
            onChange={this.handleSearch}
            value={this.state.input}
            name="search"
            id="search"
            type="text"
            placeholder="Search..."
          />
        </div>

        <div>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleCheckbox}
            name="stockedFilter"
            id="stockedFilter"
          />
          <span> Only show products on stock</span>
        </div>
      </div>
    );
  }
}

export default SearchBar;
