import React, { Component } from 'react';
import data from '../data.json'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
    constructor(){
        super()
        this.state={}

    }
    render() {
        return(
            <div>
            <SearchBar />
            <ProductTable />
            </div>
        )
    }
}

export default FilterableProductTable;