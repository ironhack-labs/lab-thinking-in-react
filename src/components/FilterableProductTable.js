import React, { Component } from 'react';
import ProductsTable from './ProductsTable/ProductsTable';
import SearchBar from './SearchBar/SearchBar';

class FilterableProductTable extends Component {

    constructor(props) {
        super()

        this.state = {
            searchText: "",
            products: props.products
        }
    }

    updateSearchText = (text) => {
        this.setState({
            searchText: text
        })
        this.filterProducts()
    }

    filterProducts = () => {
        debugger
        const arrCopy = [...this.state.products]
        const filteredProducts = arrCopy.filter(product => product.name.includes(this.state.searchText.toLowerCase()))

        this.setState({
            product: filteredProducts
        })
    }


        // // filterProduct = (filter) => {
    //     let filterCopy = [...data]
        
    //     filterCopy = filterCopy.filter(this.includes(filter))
    
    //     this.setState({
    //       products: filterCopy
    //     })
    // }

    render() {

     return (
        <div className="App">
        <h1>IronStore</h1>
        <SearchBar  updateSearchText={this.updateSearchText}/>
        <ProductsTable products={this.state.products} />
      </div>
     )
}
}

export default FilterableProductTable;