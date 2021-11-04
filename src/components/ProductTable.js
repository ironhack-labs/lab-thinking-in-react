import React from "react";
import ProductRow from "./ProductRow";

class ProductTable extends React.Component {
    render() {
        return (
          <table className='products-table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {this.props.listOfProducts.map((product) => {
                return <ProductRow key={product.id} {...product} />;
              })}
            </tbody>
          </table>
        );
    }
}

export default ProductTable