import { useState } from 'react';
import jsonData from '../data.json';
import ProductRow from './ProductRow';

function ProductTable() {
  const [productTable, setProductTable] = useState(jsonData);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((el) => {
          return <ProductRow name={el.name} price={el.price} />;
        })}
      </tbody>
    </table>
  );
}

export default ProductTable;
