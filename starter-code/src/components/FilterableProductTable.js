import React, { Component } from "react";
import "../App.css";

import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.products.data,
            filteredData: props.products.data
        };
    }

    searchHandler = searchWord => {
        let filteredProducts = this.state.data.filter(product => {
            const productLowerCase = product.name.toLowerCase();
            return productLowerCase.includes(searchWord);
        });
        this.setState({ filteredData: filteredProducts });
    };

    render() {
        return (
            <div className="App">
                <h1>IronStore</h1>
                <SearchBar filterData={this.searchHandler} />
                <ProductTable data={this.state.filteredData} />
            </div>
        );
    }
}

export default FilterableProductTable;

