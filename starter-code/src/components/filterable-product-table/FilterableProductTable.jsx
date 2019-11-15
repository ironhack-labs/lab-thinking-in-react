import React, { Component } from 'react'
import ProductTable from "../product-table/ProductTable";
import SearchBar from "../search-bar/SearchBar";

export default class FilterableProductTable extends Component {
  
  searchProducts = (e, productName) => {
    e.preventDefault();

    // console.log("filter", productName)

    // let filteredProductList = [...this.props.productsArrP1].filter((eachProduct) => {
    //   return eachProduct.name.toLowerCase().includes(productName.toLowerCase())
    // });

    this.props.filterListP(e, productName);
  }
  
  render() {

    // console.log("rendering")
    // console.log("Filterable.jsx", this.props.productsArrP1)

    return (
      <div>
        <SearchBar searchProductsP={this.searchProducts} />
        <ProductTable productsArrP2={this.props.productsArrP1} />
        
      </div>
    )
  }
}
