import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    search: '',
    isCheck:false
  };

  handleChange = (event) => {
    const value = event.target.value;

    this.setState({
      search: value,
    });

    this.props.handleSearch({
      search: event.target.value,
    });
  };

  handleCheck = (event) => {

     this.setState({
      isCheck: event.target.checked,
    });

    this.props.handleStock({
      stock: event.target.checked,
    });
  };

  render() {
    return (
      <div>
        <h2>Search</h2>
        <form className="Form">
          <input
            id="search"
            autoComplete="off"
            className="search"
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
          />

          <input
            onChange={this.handleCheck}
            type="checkbox"
            id="checkstock"
            name="checkstock"
          />
          <label for="checkstock">Only show products on stock</label>
        </form>
      </div>
    );
  }
}
