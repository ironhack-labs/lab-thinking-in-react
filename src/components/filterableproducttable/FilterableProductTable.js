import React, { Component } from 'react';
import ProductTable from '../producttable/ProductTable';
import SearchBar from '../searchbar/SearchBar';

export default class FilterableProductTable extends Component {

    state = {
        searchValue: "/", // if put empty string, result still showing products as they contain space in their name
    }

    searchHandler = (e) => {
        this.setState({
            searchValue: e.target.value.toLowerCase()
        })
    }

    render() {
        // console.log(this.props.products)
        const filteredProducts = this.props.products.filter((product) => {
            return product.name.toLowerCase().includes(this.state.searchValue)
            })
        
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar onSearch={this.searchHandler}/>
                <ProductTable products={ filteredProducts } />
            </div>
        )
    }
}
