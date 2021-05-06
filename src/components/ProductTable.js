import React from 'react';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
  render() {
    console.log('ProductTable -> render', this.props.qqq);
    const productsFiltered = this.props.products.filter((prod) =>
      prod.category
        .concat(prod.name)
        .toLowerCase()
        .includes(this.props.qqq.toLowerCase())
    );

    return (
      <div className="ProductTable">
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {productsFiltered.map((product) => {
              return <ProductRow product={product} key={product.id} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
