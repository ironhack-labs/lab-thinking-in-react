import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    searchWord: '',
    checked: false,
  };

  handleSearch = async (event) => {
    await this.setState({ searchWord: event.target.value });
    this.props.SearchTheProduct(this.state.searchWord);
  };

  handleCheckBox = async (event) => {
    await this.setState({ checked: event.target.value });
    this.props.checkStock(this.state.checked);
  };

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      checked: false,
    });
  }

  render() {
    return (
      <div>
        <h3>Search</h3>
        <input
          type="search"
          name="search"
          placeholder="Search..."
          value={this.state.searchWord}
          onChange={this.handleSearch}
        ></input>
        <br />
        <form onSubmit={this.handleSubmit}>
          <input
            type="checkbox"
            name="check"
            checked={this.state.checked}
            value={this.state.checked}
            onChange={this.handleCheckBox}
          ></input>
          <label>Only show products on stock</label>
        </form>
      </div>
    );
  }
}
