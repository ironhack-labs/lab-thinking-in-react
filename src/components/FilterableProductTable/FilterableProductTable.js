import React, { Component } from 'react'

//componentes :3
import ProductTable from './../ProductTable/productTable'
import SearchBar from './../SearchBar/searchBar'




class FilterableProductTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: props.products.data,
        }

    }

    findProduct = (searchedName) => {
        const copyProduct = [...this.state.products]
        const findMe = copyProduct.filter((elem) => elem.name.includes(searchedName))
        this.setState({ products: findMe })
    }

    render() {
        return (
            <>
                <h1>IronStore</h1>
                <p>searchbar aquí! :3 </p>
                <SearchBar search={this.findProduct} />
                <ProductTable props={this.state.products} />
            </>
        )
    }
}

export default FilterableProductTable