import React, { Component } from 'react';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilteredProductTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filtered: this.props.products,
    }
    this.receiveStringAndSearch = this.receiveStringAndSearch.bind(this);
    this.filterOnStock = this.filterOnStock.bind(this);
  }

  receiveStringAndSearch(event) {
    let searchString = event.target.value;
    let currentList = [];
    let newList = [];
  
    if (searchString !== "") {
      currentList = this.props.products;
      newList = currentList.filter(item => {
        const lc = item.name.toLowerCase();
        const filter = searchString.toLowerCase();
        return lc.includes(filter);
      });
    } else {
        newList = this.props.products;
    }
    console.log(newList)
    this.setState({
      filtered: newList
    }, () => console.log(this.state.filtered));
  }

  filterOnStock(event) {
    let filter = event.target.checked;
    let currentList = [];
    let newList = [];
    if (filter) {
      currentList = this.props.products;
      newList = currentList.filter(item => item.stocked);
    } else {
        newList = this.props.products;
    }

    this.setState({
      filtered: newList
    });
  }

  render() {
    return (
      <div className="container">
        <h1>IronStore</h1>
        <SearchBar searchFunction={this.receiveStringAndSearch} filterFunction={this.filterOnStock}/>
        <ProductTable products={this.state.filtered}/>
      </div>
    );
  }
}

export default FilteredProductTable;