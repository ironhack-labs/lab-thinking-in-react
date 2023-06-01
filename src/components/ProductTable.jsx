import ProductRow from './ProductRow';
import { useState } from 'react';
import productInfo from '../data.json';

function ProductTable({ search }) {
  const [products, setProducts] = useState(productInfo);
  const filteredProduct = products.filter((product) => {
    const searchProduct = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return searchProduct;
  });

  const items = filteredProduct.map((item) => {
    return (
      <ProductRow
        key={item.id}
        product={item}
        search={search}
      />
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
    </div>
  );
};

export default ProductTable;
