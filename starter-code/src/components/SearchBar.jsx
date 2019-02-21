import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    SearchProduct: "",
    stocked: false
  };
  handleSearch = e => {
    e.preventDefault();
    this.setState(
      {
        ...this.state,
        SearchProduct: e.target.value
      },
      () => {
        this.props.searchProduct(this.state.SearchProduct, this.state.stocked);
      }
    );
  };

  checkHandler = () => {
    const newState = {...this.state}
    newState.stocked = !newState.stocked
    this.setState(newState)
    this.props.searchProduct(this.state.SearchProduct, newState.stocked);
  }


  render() {
    return (
      <div className="labelContainer">
        <label>Search</label>
        <input
          className="inputClass"
          type="text"
          value={this.state.SearchProduct}
          onChange={this.handleSearch}
        />
        <input type="checkbox" onClick={this.checkHandler} />
        Only show products on stock
      </div>
    );
  }
}
