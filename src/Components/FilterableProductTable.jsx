import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import jsondata from './../data.json';

class FilterableProductTable extends Component {

    state = {
        products: jsondata.data,
    };

    render() {
        return (

            <div>
                <SearchBar>
                    test
                </SearchBar>

                <ProductTable /**  {this.state.products} **/ />


            </div>
        )
    }
}

export default FilterableProductTable
