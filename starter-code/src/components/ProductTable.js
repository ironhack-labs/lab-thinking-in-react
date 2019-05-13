import React, { useContext } from 'react';

import Context from '../context';
import ProductRow from './ProductRow';

const ProductTable = () => {
  const { state } = useContext(Context);
  const { filteredProducts: products } = state;

  const productsRows = products.map((product, i) => (
    <ProductRow key={i} {...product} />
  ));

  return (
    <section>
      <table className="table is-fullwidth is-hoverable is-striped is-bordered">
        <thead>
          <tr>
            <th className="is-dark has-text-centered">Name</th>
            <th className="is-dark has-text-centered">Price</th>
          </tr>
        </thead>
        <tbody>{productsRows}</tbody>
      </table>
    </section>
  );
};

export default ProductTable;
