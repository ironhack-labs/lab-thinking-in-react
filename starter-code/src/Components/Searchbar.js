import React, { Component } from 'react';

export default class Searchbar extends Component {
  render() {
    const { searchFunction, onStock } = this.props;

    return (
      <div className="Searchbar">
        <form className="uk-search uk-search-default .uk-width-1-2">
          <span className="uk-search-icon-flip" uk-search-icon="true"></span>
          <input className="uk-search-input .uk-width-1-2" type="search" placeholder="Search..." onChange={searchFunction}/>
        </form>
        <div className="uk-margin">
          <label><input className="uk-checkbox" type="checkbox" onChange={onStock} />Only show products on stock</label>
        </div>
      </div>
    );
  }
}
