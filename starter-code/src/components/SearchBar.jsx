import React, { Component } from "react";
import FormField from './FormField';

export default class SearchBar extends Component {
  render() {
    const {onSearch, onStock, value} = this.props;
    return (
      <div className="searchBar">
        <FormField label="" name="" type="text" placeholder="Type a search..." onChange={onSearch} value={value}></FormField>
        <FormField label="" name="stocked" type="checkbox" onChange={onStock} value="stockedProducts"> Only products in stock</FormField>
      </div>
    );
  }
}
