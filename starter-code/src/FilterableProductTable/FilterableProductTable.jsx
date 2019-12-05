import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar';
import ProductSection from '../ProductSection/ProductSection';




export default class FilterableProductTable extends Component {

    render() {
        return (
            <div>
                <h1>IronStore</h1>
        <SearchBar></SearchBar>
        <ProductSection data={this.props.products.data}></ProductSection>
            </div>
        )
    }
}
