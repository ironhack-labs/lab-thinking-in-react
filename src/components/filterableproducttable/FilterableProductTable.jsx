import React, { Component } from 'react'
import ProductTable from '../producttable/ProductTable'
import SearchBar from '../searchbar/SearchBar'

export default class FilterableProductTable extends Component {

    state = {
        products: this.props.products.data,
        filteredProductsBySearch: '',
        productsInStock: ''
    }

    filterProducts = (searchInput) => {
        const filteredProductArrByInstock = this.state.products.filter(product => product.stocked)
        // let filteredProductInStockArrBySearch = this.state.productsInStock.filter(product => product.name.toLowerCase().startsWith(searchInput.search))
        
        
        searchInput.inStock && this.setState({productsInStock : filteredProductArrByInstock})

        // this.state.productsInStock !== '' ? filteredProductInStockArrBySearch : filteredProductArrBySearch
    
        let filteredProductArrBySearch = this.state.products.filter(product => product.name.toLowerCase().startsWith(searchInput.search))



        this.setState({
            filteredProductsBySearch: filteredProductArrBySearch,
        })
    }

    render() {

    
      
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar products={ this.state.products } searchTerm={this.filterProducts} />
                {
                    this.state.filteredProductsBySearch !== "" 
                    ?
                    <ProductTable products={ this.state.filteredProductsBySearch }/>
                    :
                    <ProductTable products={ this.state.products }/>
                }

            </div>
        )
    }
}
