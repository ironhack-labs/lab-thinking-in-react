import React, { Component } from 'react'
import ProductTable from '../producttable/ProductTable'
import SearchBar from '../searchbar/SearchBar'

export default class FilterableProductTable extends Component {

    state = {
        products: this.props.products.data,
        filteredProductsBySearch: ''
    }

    filterProducts = (searchInput) => {
        const filteredProductArrByInstock = this.state.products.filter(product => product.stocked)
        let filteredProducts
    
        if(searchInput.inStock){
            filteredProducts = filteredProductArrByInstock.filter(product => product.name.toLowerCase().startsWith(searchInput.search))
        } else {
            filteredProducts = this.state.products.filter(product => product.name.toLowerCase().startsWith(searchInput.search))
        }
        this.setState({filteredProductsBySearch: filteredProducts})
    }
    

    render() {

    
      
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar products={ this.state.products } searchTerm={this.filterProducts} inStock={this.checkInStock} />
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
