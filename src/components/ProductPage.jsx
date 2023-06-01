import { useState } from 'react';
import jsonData from '../data.json';
import ProductsTable from './ProductsTable';
import SearchBar from './SearchBar';

export default function ProductPage() {
  const [products, setProducts] = useState(jsonData);
  const [allProduct, setAllProduct] = useState(jsonData);

  const filterProducts = (search) => {
    const filterProduct = allProduct.filter((product) =>
      product.name.toUpperCase().includes(search.toUpperCase())
    );
    setProducts(filterProduct);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <div>
        <SearchBar filterProducts={filterProducts} />
      </div>
      <ProductsTable products={products} />
    </div>
  );
}
