import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Table from './Table';

export default class FilterableProductTable extends Component {

state = {
  displayedProducts: this.props.products
}

filter = (searchValue) => {
  const displayedProductsCopy = [...this.props.products];
  this.setState({displayedProducts: (searchValue.length) ? displayedProductsCopy.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase())) : displayedProductsCopy})
}

    render() {
      return (
        <div className="top-table">
            <SearchBar filterProducts={this.filter}/>
            <Table products={this.state.displayedProducts} />
        </div>
      );
    }
  }