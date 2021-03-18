import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export class FilterableProductTable extends Component {
    state = {
        search: ""
    }

    changeState = (searchValue) => {
        this.setState({search: searchValue})
    }

    render() {
        const products = this.props.products
        return (
            <div>
                <SearchBar 
                    searchValue={this.state.search}
                    onSearchValue={this.changeState}
                />
                <ProductTable 
                    searchValue={this.state.search} 
                    allItems={products} 
                />
            </div>
        )
    }
}

export default FilterableProductTable
