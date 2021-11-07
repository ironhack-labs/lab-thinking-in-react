import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: this.props.products
        }        
    }

    render() {
    return (
        <>
        <h1>IronStore</h1>
            <SearchBar products={this.state.products}/>
            <ProductTable products={this.state.products}/>
        </>
    )
    }
}