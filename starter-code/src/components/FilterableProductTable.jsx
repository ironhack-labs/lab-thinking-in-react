import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {

    state = {
        products: this.props.products,
        search:"",
        checked:false
    };

    filter = (e) => {
        e.target.type === "search" ?
        this.setState({search:e.target.value})
        :this.setState({checked:e.target.checked})
    }

    filterArr = () => {
    
        var filteredProducts = this.state.products.filter(product => product.name.toLowerCase().match(this.state.search.toLowerCase()));

        var stockedProducts;

        this.state.checked?
        stockedProducts = filteredProducts.filter(product => product.stocked ===true)
        :stockedProducts = filteredProducts;

        return stockedProducts
    }

    render() {
        return (
            <div>
                <h1 className="title">IRON - STORE</h1>
                <SearchBar handleChange={this.filter}/>
                <ProductTable productsDisplay={this.filterArr()}/>
            </div>
        )
    }
}
