import React, { Component } from "react";
import ProductRow from "./ProductRow";
//import products from "./data.json";

class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //products: this.props.productsList
    };
  }

  getProducts = () => {
    return (
      this.props.productsList.map((product, i) => 
            <ProductRow key={i} {...product} />
          )
    )
  };


  render() {
    return (

      <div className="container">
        <table className="table is-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{this.getProducts()}</tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
