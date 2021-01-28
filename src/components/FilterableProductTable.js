import React, { Component } from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            products: this.props.products
        }
    }

    filterProducts = searchQuery => {
        const filteredProducts = searchQuery ? this.state.products.filter(product => product.name.toUpperCase().includes(searchQuery.toUpperCase())) : this.props.products;
    
        this.setState({
            products: filteredProducts
        })
    }

    render() {
        let shownProducts = this.state.products;
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar searchProducts={this.filterProducts} />
                <ProductTable products={shownProducts} />
            </div>
        )
    }
}

