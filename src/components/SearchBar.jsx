import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    search: '',
  };

  handlChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({
      [key]: value,
    });
  };

  render() {
    return (
      <div>
        <h2>Search</h2>
        <form className="Form" onSubmit={this.handleSubmit}>
          <input
            id="search"
            autoComplete="off"
            className="search"
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
