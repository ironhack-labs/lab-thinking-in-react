import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const searchProducts = (searchValue) => {
    if (searchValue) {
      setProducts((prev) =>
        prev.filter((product) =>
          product.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }else {
      setProducts(jsonData)
    }
  };
  return (
    <div>
      <SearchBar searchProducts={searchProducts} />
      <h1>IronStore</h1>
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
