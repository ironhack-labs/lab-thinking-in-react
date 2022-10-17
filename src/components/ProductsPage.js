import { useState } from 'react';
import jsonData from '../data.json';
import ProductsTable from './ProductsTable';
import SearchBar from './SearchBar';

const ProductsPage = () => {
  const allProducts = [...jsonData];

  const [products, setProducts] = useState(allProducts);

  const onSearch = (query) => {
    const filteredProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const onCheck = (isChecked) => {
    if (isChecked === true) {
      const existingProducts = allProducts.filter(
        (product) => product.inStock === true
      );
      setProducts(existingProducts);
    } else {
      setProducts(allProducts);
    }
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar onSearch={onSearch} onCheck={onCheck} />
      <br></br>
      <ProductsTable products={products} />
    </div>
  );
};

export default ProductsPage;