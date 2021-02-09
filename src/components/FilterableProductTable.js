import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {

    state = {
        products: this.props.products
    }

    handleSearch = (value) => {
        const filteredProducts = value ? this.state.products.filter(product => (product.name.toUpperCase().startsWith(value.toUpperCase()))) : this.props.products

        this.setState({
            products: filteredProducts
        })
    }

    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar searchProducts={this.handleSearch} />
                <ProductTable products={this.state.products} />
            </div>
        )
    }
}

export default FilterableProductTable;