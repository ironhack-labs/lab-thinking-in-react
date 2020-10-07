import React from 'react';
import ProductRow from '../ProductRow';

const ProductTable = ({ products }) => {
  //console.log(products);

  return (
    <div className="product-table">
      <table>
        <thead>
          <tr>
            <th> Name </th> <th> Price </th>{' '}
          </tr>{' '}
        </thead>{' '}
        <tbody>
          {products.map((product, i) => {
            return <ProductRow key={i} product={product} />;
          })}
        </tbody>{' '}
      </table>{' '}
    </div>
  );
};

export default ProductTable;
