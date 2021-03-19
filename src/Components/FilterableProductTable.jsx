import React, { Component } from 'react'
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

class FilterableProductTable extends Component {
    render() {
        return (
            <div>
                <h1>IRON STORE</h1>

            <SearchBar />
            

            </div>
        )
    }
}

export default FilterableProductTable
