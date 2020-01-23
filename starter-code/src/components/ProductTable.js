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
          this.props.showStock
          ?
          allProducts.filter(product => product.name.toLowerCase().includes(this.props.searchInput.toLowerCase())).filter(product => product.stocked).map((product) => {
            return <ProductRow product={product} />
          })
          :
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
