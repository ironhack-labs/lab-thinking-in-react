import React from 'react';
import ProductRow from './ProductRow.jsx';

const ProductTable = (props) => {
  console.log('Props/data from Filterable: ', props);
  const data = props.products.data;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <ProductRow key={product.id} {...product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
