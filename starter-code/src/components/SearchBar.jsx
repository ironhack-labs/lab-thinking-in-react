import React, { Component } from 'react';

export default class SearchBar extends Component {


  render() {
    return (
      <form
        className="search-bar flex column center"
        onChange={e => this.props.clbk(e)}
      >
        <p>Search</p>
        <input type="text" name="" placeholder="ex: football"/>
        <div>
          <input type="checkbox" />
          <span>Only show products on stock</span>
        </div>
      </form>
    );
  }
}
