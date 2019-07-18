import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';

export default class FilterableProduct extends Component {
    render() {
        return (
            <div>
                <h1>IronStore</h1>
                

                <SearchBar filterStock={(e) => this.props.filterStock(e)} filterProductHandler={(e)=>this.props.filterProductHandler(e)}></SearchBar>

                <ProductTable products={this.props.products}></ProductTable>
            </div>
        )
    }
}
