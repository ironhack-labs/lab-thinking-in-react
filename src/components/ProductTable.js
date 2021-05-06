import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  //console.log('ProductTable -> render', this.props.qqq);
  const productsFiltered = props.products.filter(
    (prod) =>
      prod.name.toLowerCase().includes(props.qqq.toLowerCase()) &&
      (prod.stocked || !props.stockonly)
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
};

export default ProductTable;
