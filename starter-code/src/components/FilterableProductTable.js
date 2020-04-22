import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
    state = {
        products: this.props.products.data,
        productsFilteredBy: '',
        check: false
    }

    handleSearch = (textToFilter) => {
        this.setState({
            productsFilteredBy: textToFilter
        });
    }

    handleCheck = (checkValue) => {
        this.setState({
            check: checkValue
        });
    }

    render() {
        const { products, productsFilteredBy, check } = this.state;
        let filteredProducts;

        if (check) {
            filteredProducts = products.filter(product => ((product.name.toLowerCase()).indexOf(productsFilteredBy.toLowerCase()) >= 0) && product.stocked);
        } else {
            filteredProducts = products.filter(product => (product.name.toLowerCase()).indexOf(productsFilteredBy.toLowerCase()) >= 0);
        }

        return (
            <div>
                <SearchBar setFilterProducts={this.handleSearch} setFilterCheck={this.handleCheck}/>
                {/* <ProductTable products={products} /> */}
                <ProductTable products={filteredProducts} />
            </div>
        )
    }
}

export default FilterableProductTable;