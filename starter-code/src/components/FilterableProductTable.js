import React, { Component } from 'react';
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

class FilterableProductTable extends Component {

    state = {
        products: this.props.products.data
    }

    filterTable= (searchValue) => {
        const filteredProducts = this.props.products.data.filter(product => product.name.includes(searchValue));  
        this.setState({
          products : filteredProducts
        });
    }

    render() {
        const products = this.state.products;
        return (
        <div>
            <h1>Iron Store</h1>
            <SearchBar filterTable= { this.filterTable }/>
            <ProductTable products = { products } />
        </div>
        );
    }
}

export default FilterableProductTable;
