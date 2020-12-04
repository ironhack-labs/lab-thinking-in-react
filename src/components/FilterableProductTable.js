import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends Component {

    state = {
        searchValue: "", 
    }

    searchHandler = (e) => {
        this.setState({
            searchValue: e.target.value.toLowerCase()
        })
    }

    render() {
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