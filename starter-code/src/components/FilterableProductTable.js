import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import data from "../data.json";

export default class FilterableProductTable extends Component{
    
    constructor() {
        super();
        this.updateShown = this.updateShown.bind(this);
    }

    state={
        data: data.data
    }
    
    updateShown(showOnlyInStock, searchText) {
        // "Resets" data
        let dataUpdated = data.data;
        // Filters if necessary
        if (showOnlyInStock) dataUpdated = dataUpdated.filter(product => product.stocked);
        // Filters by name
        if (searchText) dataUpdated = dataUpdated.filter(product => product.name.includes(searchText));
        this.setState({ showOnlyInStock, searchText, data: dataUpdated});
    }

    render() {
        return (
            <div>
                <h1 style={{textAlign: "center", fontSize: "xx-large"}}>IronStore</h1>
                <SearchBar paramsUpdated={this.updateShown} />
                <ProductTable rows={this.state.data} />
            </div>
        )
    }
}