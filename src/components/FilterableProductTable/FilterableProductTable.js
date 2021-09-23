import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import ProductTable from '../ProductTable/ProductTable'

export default class FilterableProductTable extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            products: this.props.products,
            searchValue: '',
            isStock: false
        }
    }
    handleChange = (e) => {
        const { name, checked, value, type } = e.target
        // const newValue = type === 'checkbox' ? checked : value
        this.setState({
            ...this.state,
            [name]: value
        })
    }
    displayProducts = () => {
        const productfilter = this.state.products.filter(product => product.name.toLowerCase().includes(this.state.searchValue.toLocaleLowerCase()))
        return (
            <ProductTable products={productfilter} />
        )
    }

    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <div>
                    <SearchBar handleChange={this.handleChange} value={this.state.searchValue} checked={this.props.isStock} />
                    {
                        this.displayProducts()
                    }
                </div>
            </div>
        )
    }
}
