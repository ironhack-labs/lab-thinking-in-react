import React, { Component } from "react";
import data from "../data.json";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  constructor() {
    super();
  }

  render() {
    return (<div style={{border: 'green'}}>
    <p>Hola marte</p>
    <ProductCategoryRow category='electronics'/>
    <ProductRow name='Baseball' price='10'/>

    </div>
    );
  }
}

export default ProductTable;