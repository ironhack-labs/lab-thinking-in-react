import React from 'react'
import SearchBar from './../SearchBar/SearchBar'
import ProductsRow from './../ProductRow/ProductRow'
import jsondata from '../../data.json'
import { filter } from 'dom-helpers'

export default class FilterableProductTable extends React.Component {

    state = {
        products: jsondata.data,
        searchTerm: "",
        productsToShow: jsondata.data,
    }



    searchProduct = (text, checkStock) => {

        if (checkStock) {

            const filteredProducts = this.state.products.filter((product) => {

                return (
                    product.name.toLowerCase().includes(text) && product.stocked
                )
            })

            this.setState({
                ...this.state,
                productsToShow: filteredProducts
            })

        } else {


            const filteredProducts = this.state.products.filter((product) => {

                return (
                    product.name.toLowerCase().includes(text)
                )
            })

            this.setState({
                ...this.state,
                productsToShow: filteredProducts
            })

        }

    }

    render() {
        return (
            <div>
                <h1 className="mt-3">IronStore_</h1>
                <SearchBar searchTerm={this.state.searchTerm} searchProduct={this.searchProduct} />
                <ProductsRow products={this.state.productsToShow} />
            </div>
        )
    }
}
