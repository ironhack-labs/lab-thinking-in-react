import React, { Component } from "react";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: this.props.products
    };
  }
  render() {
    const { allProducts } = this.state;
    const { queryString, inStock } = this.props;

    console.log("PRODUCTS IN PRODUCT TABLE: ", allProducts);
    console.log("QSTRING IN PRODUCT TABLE: ", queryString);
    console.log("inStock IN PRODUCT TABLE: ", inStock);

    const productsToShow = allProducts.data.filter(oneProduct => {
      if (inStock) {
        return (
          oneProduct.name.indexOf(queryString) !== -1 &&
          oneProduct.stocked === inStock
        );
      } else {
        return oneProduct.name.indexOf(queryString) !== -1;
      }
    });

    return (
      <section className="ProductTable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Stocked?</th>
            </tr>
          </thead>
          <tbody>
            {productsToShow.map((oneProduct, index) => {
              return (
                <ProductRow
                  key={index}
                  name={oneProduct.name}
                  price={oneProduct.price}
                  stockState={oneProduct.stocked}
                />
              );
            })}
          </tbody>
        </table>
      </section>
    );
  }
}

export default ProductTable;
