import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import data from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    searchElement: '',
    availability: false,
    maxPrice: 10000,
  };

  searchHandler = e => {
     e.target.type === 'checkbox'
      ? this.setState({ availability: e.target.checked })
      : e.target.type === 'number' ? this.setState({ maxPrice: +e.target.value ? +e.target.value : 10000 })
      : this.setState({ searchElement: e.target.value });
      console.log(this.state.maxPrice);
  };

  render() {
    return (
      <div className="flex center column">
        <h1>IronStore{' '}<FontAwesomeIcon icon={faShoppingCart}/></h1>
        <SearchBar clbk={this.searchHandler} />
        <ProductTable
          products={data.data
            .filter(a =>
              this.state.searchElement
                ? a.name
                    .toLowerCase()
                    .includes(this.state.searchElement.toLowerCase())
                : true
            )
            .filter(a=> this.state.availability? a.stocked : true).filter(a=> +a.price.substring(1) <= this.state.maxPrice )
          }
        />
      </div>
    );
  }
}
