import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import productsArray from "../data.json";

class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: productsArray,
     }
  }

 
  render() { 
    const {data} = this.state.data;

    let rows = [];
    for(let i = 0; i < data.length; i++){
      if (i === 0 || data[i].category !== data[i - 1].category){
        rows.push(
          <ProductCategoryRow key={"c-" + i} category={data[i].category} />
        );
      }
      rows.push(
        <ProductRow key={"p-" + i} {...data[i]} />
      );
    }

    return ( 
     
       <table className="ProductTable">
            <thead>
            <th>Name</th>
            <th>Price</th>
            </thead>

            {rows}
            </table>
     );
  }
}
 
export default ProductTable;