import React, { Component } from 'react'

import SearchBar from '../searchBar/SearchBar'
import ProductTable from '../productTable/ProductTable'


class FilterableTable extends Component {

     constructor() {
        super()
        this.state = {
            name : ''
          
        }
    }

    updateNameForSearch = (searchString) => {
        console.log(searchString)
        this.setState({name : searchString})
    }

    render() {
        return (
            <>
                <h1>IronStore</h1>
                <SearchBar updateFilter = {this.updateNameForSearch} />
                <ProductTable data={this.props.data.filter(elm => elm.name.includes(this.state.name)).map(elm => elm)}/>

            </>
        )
    }
}

export default FilterableTable