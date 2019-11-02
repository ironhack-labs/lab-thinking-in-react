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
    console.log(searchTerm);
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

  filterStock = isChecked => {
    const results = [];
    const list = [...this.state.products];
    list.map(i => {
      return i.stocked === true ? results.push(i) : null;
    });

    isChecked
      ? this.setState({ products: results })
      : this.setState({ products: list });
  };

  render() {
    return (
      <div>
        <div className="App">
          <h1>IronStore</h1>
          <SearchBar
            searchItems={this.searchItems}
            filterStock={this.filterStock}
          />
          <ProductTable blah={this.state.products} />
        </div>
      </div>
    );
  }
}

export default FilterableProductTable;
