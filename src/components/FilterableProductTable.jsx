import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
    state = {
        query: '',
        inStock: false,
    };

    handleSearch = (event) => {
        // console.log(event.target.value);
        this.setState({ query: event.target.value });
    };

    handleChecked = (event) => {
        // console.log(event.target.checked);
        this.setState({ inStock: event.target.checked });
    };

    render() {
        const filteredProducts = this.props.products.filter((product) => {
            if (!this.state.query && !this.state.inStock) {
                return product;
            } else if (!this.state.query && this.state.inStock) {
                return product.stocked === true;
            } else {
                return product.name
                    .toLowerCase()
                    .includes(this.state.query.toLowerCase());
            }
        });
        return (
            <div>
                <SearchBar callback={this.handleSearch} inStock={this.handleChecked} />
                <ProductTable products={filteredProducts} />
            </div>
        );
    }
}

