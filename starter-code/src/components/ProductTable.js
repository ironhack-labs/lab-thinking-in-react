import React, {Component} from "react";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const product = this.props.product;
    return (
      <div className="section">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {product.map((oneProduct, index) => {
              return (
                <ProductRow
                  key={index}
                  productName={oneProduct.name}
                  productPrice={oneProduct.price}
                  inStock={oneProduct.stocked}
                />
              );
            })}
          </tbody>
          {/* <ProductRow product={this.props.product} /> */}
        </table>
      </div>
    );
  }
}

export default ProductTable;
