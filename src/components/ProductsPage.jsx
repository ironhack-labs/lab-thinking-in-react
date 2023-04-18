import { useState } from 'react';
import jsonData from '../data.json';

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);

  return (
    <div>
      <h1>IronStore</h1>
    </div>
  );
};

export default ProductsPage;
