import React, { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

export default class FilterableProductTable extends Component {

    state = {
        searchbarInput: "",
        checkbox: false,
        originalProducts: this.props.products.data,
        filteredProducts: this.props.products.data
    }

    handleSearchBarInput = (value) => {

        // console.log("handleSearchBarInput is called - parent ", value)
        const copy = [...this.state.originalProducts]
        const filtered = copy.filter((arr) => (arr["name"].includes(value)))
        // console.log("filtered=>>>>",filtered)
        this.setState({ searchbarInput: value, filteredProducts: filtered })

    }


    handleCheckBox = (checked) => {

        const copy = [...this.state.originalProducts]

        //this allows the checkedbox and seachbar function together, no matter the order of the actions 
        checked ?
            this.setState({ checkbox: true, filteredProducts: copy.filter((arr) => (arr["stocked"] && arr["name"].includes(this.state.searchbarInput))) })
            : this.setState({ checkbox: false, filteredProducts: copy.filter((arr) => (arr["name"].includes(this.state.searchbarInput))) })

    }


    render() {
        // console.log("FilterableProductTable", this.props.products)

        return (
            <div className="FilterableProductTable">

                <h1>IronStore</h1>

                <SearchBar handleChangeFromParent={this.handleSearchBarInput} handleCheckBoxFromParent={this.handleCheckBox} />
                <ProductTable products={this.state.filteredProducts} />

            </div>
        )
    }
}
