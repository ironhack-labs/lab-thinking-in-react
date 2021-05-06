import React from 'react'
import ProductRow from "./ProductsRow"

class ProductTable extends React.Component{

  render(){

    return (
      <div className="ProductTable">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <ProductRow products={this.props.renderProducts} />
        </table>
      </div>
    )
  }

}

export default ProductTable