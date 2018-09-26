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

        if(search === false) {
            const copyGoods = goods.data.filter(g => {
                return g.stocked;
            });

            this.setState({
                goods: copyGoods
            });
        } else if(search === true) {
            const copyGoods = goods.data.concat([]);

            this.setState({
                goods: copyGoods
            });
        } else {
            const copyGoods = goods.data.filter(g => {
                return g.name.toLowerCase().includes(search.toLowerCase());
            });

            this.setState({
                goods: copyGoods
            });
        }
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