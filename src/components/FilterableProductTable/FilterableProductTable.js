import React from 'react'
import { Component } from 'react'
import data from '../../data.json'

import SearchBar from '../SearchBar/SearchBar'
import ProductTable from '../ProductTable/ProductTable'

class FilterableProductTable extends Component {

    constructor() {
        super()
        this.state = {
            data: {...data}
        }
    }

    render () {

        const { data } = this.state.data
                
        return (
            <>
                <SearchBar ></SearchBar>
                <ProductTable data={data} ></ProductTable>
            </>
        )
    }
}

export default FilterableProductTable