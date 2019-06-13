import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {

    constructor(props){
        super(props);

        this.state = {
            products: this.props.products.data,
            copyProducts: this.props.products.data,
            query: ''
        }
    }

    searchProduct = (query) => {
        let copyProducts = [...this.state.copyProducts]
        this.setState({products: copyProducts})
        const filterProducts = (el) => {
            return el.name.toUpperCase().indexOf(query.toUpperCase()) > -1
        }
        let productsFound = copyProducts.filter(filterProducts)
        productsFound.length > 0
        ?   this.setState({products: productsFound})
        :   ''
        this.setState({query: query})
    }

    productsInStock = (boolean) => {
        let copyProducts = [...this.state.copyProducts]
        this.setState({products: copyProducts})
        if(boolean){
            const filterProductsInStock = (el) => {
                if(el.stocked) {
                    return true
                } else {
                    return false
                }
            }
            let productsFound = copyProducts.filter(filterProductsInStock)
            this.setState({products: productsFound})
        } else {
            this.setState({products: copyProducts})
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h1>IronStore</h1>
                    <SearchBar 
                        searchProduct={this.searchProduct} 
                        productsInStock={this.productsInStock}
                    />
                </div>
                <div>
                    <ProductTable 
                        products={this.state.products}
                    />
                </div>
            </div>
        );
    }
}

export default FilterableProductTable;