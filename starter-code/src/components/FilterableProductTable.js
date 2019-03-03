import React, { Component } from 'react';

import SearchBar from "./Searchbar"
import ProductTable from "./ProductTable"
import data from '../data.json'

class FilterableProductTable extends Component {

    constructor() {
        super();
        this.state = {
            products: data
        }

    }

    searchFunction = (searchTerm) => {
        const filteredProducts = data.filter((d) => {
            return d.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
        
        this.setState({
            products: filteredProducts
        })
    }

    render() {
        return (
            <div>
                <SearchBar onSearch={this.searchFunction}/>
                <ProductTable products={this.state.products} />
            </div>
        )
    }


}


export default FilterableProductTable