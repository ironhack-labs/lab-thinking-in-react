import React, { Component } from "react";
import ProductRow from "./ProductRow";

class ProductTable extends Component {

    componentDidMount() {
      console.log('Component DID MOUNT.');
      console.log(this.props.products)
    }
    
  render() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr> 
            </thead>
            <tbody>
                {this.props.products.map(product => (
                    <ProductRow name={product.name} price={product.price} stocked={product.stocked}></ProductRow>
                ))}
            </tbody>
        </table>
    );
  }
}

export default ProductTable;