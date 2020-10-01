import React, { Component } from 'react'

// Custom Components
import SearchBar from '../searchBar/SearchBar'
import ProductTable from '../productTable/ProductTable'

class FilterableProductTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: this.props.products.data
        }
    }

    searchProduct = product => {

        console.log(this.state.products)

        const productsCopy = [...this.props.products.data]

        let foundProduct = productsCopy.filter(elm => elm.name.toLowerCase().includes(product.toLowerCase()))

        this.setState({ products: foundProduct })

    }

    render() {
        return (
            <>
                <h1>IronStore</h1>
                <SearchBar searchProduct={this.searchProduct} />
                <ProductTable products={this.state.products} />
            </>
        )
    }


}

export default FilterableProductTable