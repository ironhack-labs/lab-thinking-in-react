import ProductRow from './ProductRow';
import { useState } from 'react';
import productInfo from '../data.json';

function ProductTable({ search }) {
  const [products, setProducts] = useState(productInfo);
  return (
    <div className="product-table">
      {/* {products.filter((oneFilterProduct) => {
        if (
          oneFilterProduct.name.toLowerCase().includes(search.toLowerCase())
        ) {
          return true;
        }
      })} */}
      <ProductRow products={products} />

  
    </div>
  );
}

export default ProductTable;
