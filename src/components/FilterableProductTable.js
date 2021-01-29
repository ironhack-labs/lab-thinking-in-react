import React, { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
import '../App.css'

export class FilterableProductTable extends Component {

    state = {
        products: this.props.products.data,
    }

    handleSearch = (value) => {
        const newProducts = this.state.products.filter(item => (item.name.toUpperCase().includes(value.toUpperCase())))
        
        let showProducts = newProducts > 0 ? newProducts : this.state.products
        // console.log(`NEW PRODUCTS: ${newProducts}`)
        // console.log(`SHOW PRODUCTS: ${showProducts}`)

        this.setState({
            products: newProducts
        })
      }

    showInStock = (value) => {
        const productsInStock = value ? this.props.products : this.state.products.filter(product => product.stocked === true);

        this.setState({
            products: productsInStock
        })    
    }  


    render() {
        return (
            <div className='ironStore'>
                <h1>IronStore</h1>
                <SearchBar filterItems={this.handleSearch} showInStock={this.showInStock}/>
                <ProductTable products={this.state.products} />
            </div>
        )
    }
}

export default FilterableProductTable
