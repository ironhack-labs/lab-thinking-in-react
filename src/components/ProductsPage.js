import { useState, useEffect } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SarchBar';

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);
  const [productSearch, setProductSearch] = useState('');
  const [productInStock, setProductInStock] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(jsonData);

  useEffect(() => {
    const searchResults = products.filter((product) => {
      if (productInStock) {
        return (
          product.name.toLowerCase().includes(productSearch.toLowerCase()) &&
          product.inStock
        );
      }
      return product.name.toLowerCase().includes(productSearch.toLowerCase());
    });
    setFilteredProducts(searchResults);
  }, [productSearch, products, productInStock]);

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        setProductSearch={setProductSearch}
        setProductInStock={setProductInStock}
      />
      <ProductTable products={[...filteredProducts]} />
    </div>
  );
};

export default ProductsPage;
