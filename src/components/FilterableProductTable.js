import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {

    constructor(props) {
        super();

        this.state = {
            products: props.products,
        }
    }

    updateList = (filter) => {

        this.setState({
            products: this.props.products.filter(el => el.name.startsWith(filter.query) && (!filter.isChecked || el.stocked))
        })
    }

    render = () => (
        <>
            <h1>IronStore</h1>

            <SearchBar updateList={this.updateList} />

            <ProductTable products={this.state.products} />
        </>
    )
}

export default FilterableProductTable;