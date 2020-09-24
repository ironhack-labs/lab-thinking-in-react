import React, { Component } from 'react';
import './FilterableProductTable.css';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar'
export default class FilterableProductTable extends Component {
    
    state = {
        products: this.props.products.data,
        query:'',
        isInStore: false,
     }
    
     setQuery = queryInput => {
        this.setState({
          query: queryInput
        });
      }

      setStock = queryInput => {
        this.setState({
          isInStore: queryInput
        });
      }


    render() {
        console.log('these are all the products', this.state.products);
        return (
            <div>
            <h1>IronStore</h1>
                <SearchBar 
                query={this.state.query}
                setQuery={this.setQuery}
                isInStore={this.state.isInStore}
                setStock={this.setStock}
                />
                <ProductTable 
                products={this.state.products}
                query={this.state.query}
                isInStore={this.state.isInStore}
                />
                
            </div>
        )
    }
}
