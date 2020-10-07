import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
    state = {
        products: this.props.products,
    }
    render() {
        const products = this.state.products;
        return (
            <div>
                <SearchBar />
                <ProductTable products={products}/>
            </div>
        )
    }
}

export default FilterableProductTable;