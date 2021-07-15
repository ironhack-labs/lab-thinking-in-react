import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';



export default class FilterableProductTable extends Component {
    state= {
        products: this.props.products,
        query: ''
    }
    setQuery = query => {
        this.setState({
          query: query
        })
      }
    render() {
        return (
            <>
                <p>Search</p>
                <SearchBar 
                    query={this.state.query}
                    setQuery={this.setQuery}
                />
                <ProductTable 
                    products= {this.state.products}
                    query= {this.state.query}
                />
            </>
        )
    }
}