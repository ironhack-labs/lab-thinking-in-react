import React, { useState } from 'react';
import jsonData from '../../data.json';
import SearchBar from '../search-bar/SearchBar';
import ProductTable from '../product-table/ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const filterProducts = (searchTerm) => {
    const filteredProducts = jsonData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  return (
    <div>
      <h1 className='ms-5'>IronStore</h1>
      <SearchBar onSearch={filterProducts} />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;