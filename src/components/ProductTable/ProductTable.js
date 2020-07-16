import React, { Component } from 'react'
import products from '../../data.json'
import ProductsRow from '../ProductRow/ProductRow'
import SearchBar from '../SearchBar/SearchBar'

class ProductTable extends Component {
    constructor() {
        super()
        this.state = {
            products: products.data
        }
        this.originalProds = [...products.data]
    }


    filterProduct = nameSearched => {
        console.log(nameSearched)
        let copyProduct = [...this.state.products]
        console.log(copyProduct)
        copyProduct = this.originalProds.filter(products => products.name.toLowerCase().includes(nameSearched))
        //console.log(copyProduct)
        this.setState({ products: copyProduct })
    }


    render() {
        return (
            <>
                <SearchBar filterProduct={this.filterProduct} />

                {this.state.products.map((elm, idx) => <ProductsRow key={idx} name={elm.name} price={elm.price} />)}
            </>
        )
    }
}

export default ProductTable