import React, { Component } from 'react'
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {

    constructor(props) {
        super (props);
        this.state = {
          filterText: '',
          inStockOnly: false
        };
    }

    render() {
        
        return (
            <div>
                <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
            </div>
        );
    };
}

export default FilterableProductTable;
