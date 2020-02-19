import React, { Component } from 'react';

export default class SearchBar extends Component {


  render() {
    return (
      <form
        className="flex column center"
        onChange={e => (this.props.clbk(e))}
      >
        <p>Search</p>
        <div className="search-bar">
        <input id="input-name" type="text" name="" placeholder="by name"/>
        <input id="input-number" type="number" name="input-number" placeholder="by price"/>
        </div>
        <div>
          <input type="checkbox" />
          <span>Only show products on stock</span>
        </div>
      </form>
    );
  }
}
