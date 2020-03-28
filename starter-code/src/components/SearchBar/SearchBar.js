import React, { Component } from 'react';
import './SearchBar.css';
import ProductTable from '../ProductTable/ProductTable';

class SearchBar extends Component {
  state = {
    search: '',
    checked: false
  };

  handleSearch = e => {
    // here we set the search term to the state
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleCheckBox = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  render() {
    return (
      <div className="search-bar">
        <form>
          <input
            name="search"
            type="text"
            placeholder="Search for a product"
            onChange={this.handleSearch}
            value={this.state.search}
          />
          <label htmlFor="stocked">
            <input id="stocked" type="checkbox" checked={this.state.checked} onChange={this.handleCheckBox}/>
            Only show products in stock
          </label>
        </form>

        <ProductTable
          search={this.state.search}
          checked={this.state.checked}
          products={this.props.products}
        />
      </div>
    );
  }
}

export default SearchBar;
