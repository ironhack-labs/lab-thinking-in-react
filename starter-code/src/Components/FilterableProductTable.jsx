import React, { Component } from 'react'
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import products from "../data.json";

export class FilterableProductTable extends Component {
    state= {products: products.data};
    render() {
        return (
            <div >
     <h1>Iron Store</h1>
     <SearchBar products={this.state.products}/>
       <ProductTable products={this.state.products} />
      </div>
        )
    }
}

export default FilterableProductTable
