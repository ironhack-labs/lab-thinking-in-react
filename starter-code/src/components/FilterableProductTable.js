import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import '../App.css';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.data
    };
  }

  searchItems = searchTerm => {
    const searchResults = [];
    const list = [...this.state.products];
    list.map(p => {
      return p.name.toLowerCase().includes(searchTerm.toLowerCase())
        ? searchResults.push(p)
        : ' ';
    });
    searchResults.length >= 0
      ? this.setState({ products: searchResults })
      : this.setState({ products: list });
  };

  filterStock = isChecked => {};

  render() {
    console.log(this.state.products);
    return (
      <div>
        <div className="App">
          <h1>IronStore</h1>
          <SearchBar searchItems={this.searchItems} />
          <ProductTable blah={this.state.products} />
        </div>
      </div>
    );
  }
}

export default FilterableProductTable;
