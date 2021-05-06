import React, { Component } from 'react';

export default class SearchBar extends Component {
  handleChange = (event) => {
    this.props.setQuery(event.target.value);
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="query"
            value={this.props.query}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
