import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            marginBottom: '10px',
          }}
        >
          <h3>Search</h3>
          <input
            type="text"
            placeholder="Search..."
            onChange={this.props.handleSearchFromParent}
          />
        </div>
        <div
          style={{
            marginBottom: '30px',
          }}
        >
          <input type="checkbox" />
          <span>Only show products on stock</span>
        </div>
      </div>
    );
  }
}
