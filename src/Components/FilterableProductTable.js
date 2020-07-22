import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export class FilterableProductTable extends Component {

    state = {
        searchValue: "",
        inStock: null,
      };

    handleSearch = (event) => {
        this.setState({ searchValue: event.target.value });
      };


      handleStock = (event) => {
       this.setState({inStock: event.target.checked})
    }

    render() {
        const filteredProducts = this.props.products.filter((product) => {
            if (!this.state.searchValue && !this.state.inStock) {
               return product
            } else if (!this.state.searchValue && this.state.inStock){
                return product.stocked === true

            } else {
                return product.name.includes(this.state.searchValue);
            }
            
          });
          
        return (
            <div>
            <h1>IronStore</h1>
            <SearchBar callback= {this.handleSearch} stock={this.handleStock}/>
            <ProductTable products= {filteredProducts}/>
                
            </div>
        )
    }
}

export default FilterableProductTable
