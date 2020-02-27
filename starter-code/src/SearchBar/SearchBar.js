import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  render() {
    return (
      <section className="SearchBar">
        <h5>Search</h5>
        <input type="search" onChange={e => this.props.searchFilter(e)}/>
        <div className="checkbox">
          <input type="checkbox" onChange={this.props.ifCheck} />
          <label htmlFor="checkbox">Only show products on stock</label>
        </div>
      </section>
    );
  }
}
