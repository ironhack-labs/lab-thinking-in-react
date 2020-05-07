import React, { Component } from 'react';


export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleChange = (e) => {
    this.props.searchSpace(e);
  };

  render() {
    return (
      <>
        <h2>Search</h2>
        <form>
          <input
            type="text"
            name="name"
            placeholder="search"
            onChange={this.handleChange}
          />
          <br />
          <input type="checkbox" name="checkbox" /> Only show
          products on stock
        </form>
      </>
    );
  }
}
