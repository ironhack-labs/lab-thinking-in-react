import React from 'react';
import ProductRow from '../ProductRow/ProductRow';
import 'bulma/css/bulma.css';
const ProductTable = ({ data }) => {
  return (
    <article style={{ maxWidth: '50%' }} className="container">
      <table className="table is-striped is-fullwidth">
        <tbody>
          <tr className="thead">
            <th>Name</th>
            <th>Price</th>
          </tr>
          {data.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </article>
  );
};

export default ProductTable;
