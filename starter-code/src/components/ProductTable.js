import React, {Component} from 'react';
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  render() {

    const {products} = this.props;
    const productComponents = products.map((product,i) => <ProductRow key={i} data={product} />);
    console.log(productComponents);
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {productComponents}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;