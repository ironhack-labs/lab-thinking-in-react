import { useState, useEffect } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [products, setProducts] = useState(jsonData);
  console.log('products ', products);

  useEffect(() => {
    const filteredProducts = jsonData
      .filter((product) =>
        product.name.toUpperCase().startsWith(searchQuery.toUpperCase())
      )
      .filter((product) => !showInStockOnly || product.inStock);

    setProducts(filteredProducts);
  }, [searchQuery, showInStockOnly]);

  const productsSearch = (event) => {
    console.log('event ', event.target.value);
    setSearchQuery(event.target.value);
  };

  const showProductsInStock = (event) => {
    setShowInStockOnly(event.target.checked);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        productsSearch={productsSearch}
        showProductsInStock={showProductsInStock}
      />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;