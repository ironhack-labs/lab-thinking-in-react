import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    input: '',
  };

  handleSearch = (event) => {
    this.props.filterProducts(event.target.value);
    this.setState({ input: event.target.value });
  };

  handleCheckbox = (event) => {
    // pass input value to the parent component -> lift the state here
    this.props.checkboxFilter(event.target.checked);
    this.setState({
      checked: !this.state.checked,
    });
  };

  render() {
    return (
      <div className="SearchComponent">
        <div>
          <input
            type="text"
            className="input"
            onChange={this.handleSearch}
            placeholder="search..."
            value={this.state.input}
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
