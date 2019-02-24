import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      filteredProducts: this.props.products.data,
      query: '',
      checked: false
    }
  }

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked
    })
  }

  handleSearch = e => {
    console.log(e.target.value)
 
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = this.props.products.data;
      newList = currentList.filter(item => {   
        const lc = item.name.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else newList = this.props.products.data;
  
    this.setState({
      query: e.target.value,
      filteredProducts: newList
    })
  }

  render() {
    return (
      <div className="FilterableProductTable container text-center">
        <h1>IronStore</h1>
        <SearchBar handleSearch={this.handleSearch} handleCheckbox={this.handleCheckbox}/>
        <ProductTable products={this.state.filteredProducts} query={this.state.query} checked={this.state.checked}/>
      </div>
    );
  }
}

export default FilterableProductTable;