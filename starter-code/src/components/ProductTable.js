import React, { Component } from "react";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const allProducts = this.props.products;
    return (
      <div>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {
          allProducts.filter(product => product.name.toLowerCase().includes(this.props.searchInput.toLowerCase())).map((product) => {
            return <ProductRow product={product} />
          })
        }
      </tbody>
      </div>
    )
  }
}

export default ProductTable;
