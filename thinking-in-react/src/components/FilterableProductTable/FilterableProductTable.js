import React, { Component } from 'react';
import './FilterableProductTable.css';

import goods from '../../data.json';

import SearchBar from './SearchBar/SearchBar';
import ProductTable from './ProductTable/ProductTable';

class FilterableProductTable extends Component {

    state = {
      goods: goods.data
    };

    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable goodsList={ this.state.goods } />
            </div>
        );

    }
}

export default FilterableProductTable;