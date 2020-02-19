import React from 'react';
import Product from './Product';
import NoResult from './NoResult';

export default function ProductList({ products }) {
  return (
    <div>
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>
              <strong>Name</strong>
            </th>
            <th>
              <strong>Price</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.length ? (
            products.map((product, i) => <Product product={product} key={i} />)
          ) : (
            <NoResult />
          )}
        </tbody>
      </table>
    </div>
  );
}
