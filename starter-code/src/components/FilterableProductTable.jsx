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
    sortByName: 1,
    sortByPrice: 1,
    superSort: "name"
  };

  searchHandler = e => {
     e.target.type === 'checkbox'
      ? this.setState({ availability: e.target.checked })
      : e.target.type === 'number' ? this.setState({ maxPrice: +e.target.value ? +e.target.value : 10000 })
      : this.setState({ searchElement: e.target.value });
  };

  sortByNameHandler = () => this.setState({ sortByName: -this.state.sortByName, superSort: "name" })

  sortByPriceHandler = () => this.setState({ sortByPrice: -this.state.sortByPrice, superSort: "price" })  

  sortByName = (p) => [...data.data].sort((a,b)=>a.name.toLowerCase()>b.name.toLowerCase()? -this.state.sortByName:this.state.sortByName)
  sortByPrice = (p) => [...data.data].sort((a,b)=>(+a.price.substring(1))<(+b.price.substring(1)) ? -this.state.sortByPrice:this.state.sortByPrice)
  
  superSort = parameter => parameter === "name" ? this.sortByName() : this.sortByPrice()
  
  render() {
    return (
      <div className="flex center column">
        <h1>IronStore{' '}<FontAwesomeIcon icon={faShoppingCart}/></h1>
        <SearchBar clbk={this.searchHandler} />
        <ProductTable
          products={this.superSort(this.state.superSort).filter(a =>
              this.state.searchElement
                ? a.name
                    .toLowerCase()
                    .includes(this.state.searchElement.toLowerCase())
                : true
            )
            .filter(a=> this.state.availability? a.stocked : true).filter(a=> +a.price.substring(1) <= this.state.maxPrice )
          } clbkSortName={this.sortByNameHandler} clbkSortPrice={this.sortByPriceHandler} sortByName={this.state.sortByName} sortByPrice={this.state.sortByPrice}
        />
      </div>
    );
  }
}
