import React, { Component } from 'react';
import './FilterableProductTable.css';

import goods from '../../data.json';

import SearchBar from './SearchBar/SearchBar';
import ProductTable from './ProductTable/ProductTable';

class FilterableProductTable extends Component {

    state = {
      goods: goods.data
    };

    handleSearchChange = (search) => {
        const copyGoods = goods.data.filter(g => {
            return g.name.toLowerCase().includes(search.toLowerCase());
        });

        this.setState({
            goods: copyGoods
        });
    };

    render() {
        return (
            <div className="main-wrapper">
                <SearchBar changeInput={ this.handleSearchChange }/>
                <ProductTable goodsList={ this.state.goods } />
            </div>
        );

    }
}

export default FilterableProductTable;