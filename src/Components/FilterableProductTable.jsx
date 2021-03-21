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
                {/* ligne ci-dessous, products could be called anything */}
                <ProductTable products_from_filteredproductstable={this.state.products} />


            </div>
        )
    }
}

export default FilterableProductTable
