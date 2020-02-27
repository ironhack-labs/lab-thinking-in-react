import React, { Component } from 'react';
import './FilterableProductTable.css';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    allProducts: this.props.allProducts.data,
    isCheked: false
  }

  searchProducts(e) {
    let newList = [];
    if (e.target.value !== "") {
      const filteredProducts = [...this.state.allProducts];

      newList = filteredProducts.filter(product => {
        const lc = product.name.toLowerCase();
        const filter = e.target.value.toLowerCase();
        
        return lc.includes(filter);
      });
    } else {
      newList = this.props.allProducts.data
    }
    this.setState({
      allProducts: newList
    });
  }

  checkboxUpdate() {
    let newState = {
      ...this.state
    }
    newState.isCheked =  !this.state.isCheked;

    let filteredProducts = [];
    newState.isChecked === true && (
        filteredProducts = this.props.allProducts.filter((product) => product.stocked === true)
    )
    newState.allProducts = filteredProducts

    this.setState(newState)
  }


  render() {

    return (
      <div className="App">
        <SearchBar allProducts={this.props.allProducts.data} searchFilter={e => this.searchProducts(e)} ifCheck={_ => this.checkboxUpdate()}></SearchBar>
        <ProductTable allProducts={this.state.allProducts}> isChecked={this.state.isCheked}</ProductTable>
      </div>
    );
  }
}
