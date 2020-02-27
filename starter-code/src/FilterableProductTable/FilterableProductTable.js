import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import ProductTable from "../ProductTable/ProductTable";

export default class FilterableProductTable extends React.Component {

    render () {
        return(
            <div>
                <SearchBar searchBar={this.props.searchBar}></SearchBar>
                <h1>Hola</h1>
                <ProductTable payload={this.props.products}></ProductTable>
            </div>
        )
    }
}