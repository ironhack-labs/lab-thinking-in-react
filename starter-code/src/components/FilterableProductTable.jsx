import React, { Component } from 'react'
// import data from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';





export default class FilterableProductTable extends Component {

    
    render() {
        return (
            <div className="flex center column">
                <h1>IronStore</h1>
                <SearchBar/>
                <ProductTable/>
            </div>
        )
    }
}
