import './ProductTable.css';
import ProductRow from '../ProductRow/ProductRow';
import jsonData from '../../../data/data.json';
import { useState } from 'react';

function ProductTable({filteredProducts}) {
  const [products, setProducts] = useState(jsonData);

  return (
    <>
      <table className="table-product">
        <thead className="head">
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {filteredProducts.map(product => (
            <ProductRow key={product.id} product={product} inStock={product.inStock} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ProductTable;