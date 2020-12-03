import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar.js';
import ProductTable from '../ProductTable/ProductTable.js';

export default class FilterableProductTable extends Component {
    
    state = {
        data: this.props.products,
        query: '',
        inStock: false
      };

    setQuery = query => {
     this.setState({
        query: query
    })
    }
    setStock = () => {
        this.setState({
        inStock: !this.state.inStock
        })
    }
    
    render() {
        return (
            <div>
            <h1>IronStore</h1>
                <SearchBar
                    query={this.state.query}
                    setQuery={this.setQuery}
                    inStock={this.state.inStock}
                    setStock={this.setStock}
                />
                <ProductTable 
                products={this.props.products}
                 query={this.state.query}
                 inStock={this.state.inStock}   
                />
            </div>
        )
    }
}
