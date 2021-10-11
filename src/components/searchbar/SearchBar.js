import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    searchInput: '',
    searchInStock: false,
  };

  onSearchQueryChangeHandler = (event) => {
    const { name, value, type } = event.target;
    const { data } = this.props;

    this.setState(
      {
        [name]: value,
      },
      () => {
        const filteredGoods = data.filter((good) => {
          return good.name
            .toLowerCase()
            .includes(this.state.searchInput.toLowerCase());
        });
        console.log(filteredGoods);
        this.props.onSearchQueryChange(filteredGoods);
      }
    );
  };

  handleCheckboxOnStock = () => {
    const { data, filteredData } = this.props;
    this.setState(
      {
        searchInStock: !this.state.searchInStock,
      },
      () => {
        const dataForFiltering =
          filteredData.length > 0 && this.state.searchInStock
            ? filteredData
            : data;
        const filteredGoods = dataForFiltering.filter((good) =>
          this.state.searchInStock ? good.stocked : good
        );
        this.props.onSearchQueryChange(filteredGoods);
      }
    );
  };

  render() {
    return (
      <div>
        <input
          name="searchInput"
          onChange={this.onSearchQueryChangeHandler}
          value={this.state.inputValue}
          placeholder="Search..."
        />
        <br />
        <label>Only show products on stock</label>
        <input
          type="checkbox"
          //   checked={`${this.state.searchInStock && 'checked'}`}
          onChange={this.handleCheckboxOnStock}
        />
      </div>
    );
  }
}
