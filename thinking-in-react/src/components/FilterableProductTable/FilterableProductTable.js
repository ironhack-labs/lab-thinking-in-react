import React, { Component } from 'react';
import './FilterableProductTable.css';

import goods from '../../data.json';

import SearchBar from './SearchBar/SearchBar';
import ProductTable from './ProductTable/ProductTable';

class FilterableProductTable extends Component {

    state = {
      goods: goods.data,
      showStockOnly: false,
        searchString: ""
    };

    handleSearchChange = (event) => {

            let { name, value } = event.target;
            const { searchString } = this.state;

            if(name === "showStockOnly" && value === "on"){
                value = !this.state[name];
            }

        if(value === false) {
                if(searchString !== "") {
                    const copyGoods = [...goods.data].filter(g => {
                        return g.name.toLowerCase().includes(searchString.toLowerCase());
                    });

                    this.setState({
                        goods: copyGoods,
                        showStockOnly: false
                    });
                } else {
                    const copyGoods = [...goods.data];

                    this.setState({
                        goods: copyGoods,
                        showStockOnly: false
                    });
                }

        } else if(value === true) {
            const copyGoods = this.state.goods.filter( g => g.stocked );

            this.setState({
                goods: copyGoods,
                showStockOnly: true
            });
        } else {

            let copyGoods = goods.data.filter(g => {
                return g.name.toLowerCase().includes(value.toLowerCase());
            });

            if(this.state.showStockOnly) {
                copyGoods = copyGoods.filter(g => g.stocked);
            }

            this.setState({
                goods: copyGoods,
                searchString: value
            });
        }
    };

    render() {
        return (
            <div className="main-wrapper">
                <h1 className="main-header">STORE LIST</h1>
                <SearchBar
                    changeInput={ this.handleSearchChange }
                    searchString={ this.state.searchString }
                    showStockOnly={ this.state.showStockOnly }
                    handleChange={ this.handleSearchChange }
                />
                <ProductTable goodsList={ this.state.goods } />
            </div>
        );

    }
}

export default FilterableProductTable;