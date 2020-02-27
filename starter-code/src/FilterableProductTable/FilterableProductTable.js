import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import ProductTable from "../ProductTable/ProductTable";

export default class FilterableProductTable extends React.Component {
    showStock(e) {
     
        this.props.searchStock(e)
    }

    render () {
        return(
            <div>
                <SearchBar searchBar={this.props.searchBar}></SearchBar>
                <input
                    type="checkbox"
                    onChange={e => this.showStock(e)}
                />Only show products on stock
                <ProductTable payload={this.props.products}></ProductTable>
            </div>
        )
    }
}