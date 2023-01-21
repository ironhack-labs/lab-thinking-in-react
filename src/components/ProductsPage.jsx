import './ProductsPage.css';
import SearchBar from './SearchBar';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import { useState } from 'react';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [checkStockProducts, setcheckStockProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(jsonData);

  function handleFilterProducts(keyword) {
    const filteredProducts = [...products].filter((product) => {
      return product.name.toLowerCase().includes(keyword.toLowerCase());
    });

    setFilteredProducts(filteredProducts);
  }

  function handleInStock(checked) {
    if (checked) {
      const itemInStock = checkStockProducts.filter((product) => {
        return product.inStock === true;
      });
      setFilteredProducts(itemInStock);
    } else {
      setFilteredProducts(checkStockProducts);
    }
  }

  return (
    <div className="components-group">
      <h1>IronStore</h1>
      <SearchBar
        handleFilterProducts={handleFilterProducts}
        handleInStock={handleInStock}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
