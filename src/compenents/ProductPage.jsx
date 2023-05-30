import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';
import SeachBar from './SeachBar';

export default function ProductPage() {
  const [products, setProducts] = useState(jsonData);

  const handleChange = (filterProduct, onStock) => {
    let copy = [...jsonData];
    if (onStock) {
      copy = copy.filter(
        (product) =>
          product.name.toLowerCase().includes(filterProduct.toLowerCase()) &&
          product.inStock === onStock
      );
    } else {
      copy = copy.filter((product) =>
        product.name.toLowerCase().includes(filterProduct.toLowerCase())
      );
    }
    setProducts(copy);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <div>
        <SeachBar handleChange={handleChange} />
      </div>
      <div className="Center">
        <ProductTable products={products} />
      </div>
    </div>
  );
}
