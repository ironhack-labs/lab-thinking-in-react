import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProductTable from '../components/ProductTable';
import productsData from '../data.json';
import styles from './ProductsPage.module.css'; // Import the styles

function ProductsPage() {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleFilterTextChange = (text) => {
    setFilterText(text);
  };

  const handleInStockChange = (inStock) => {
    setInStockOnly(inStock);
  };

  return (
    <div className={styles.container}> {/* Use the style */}
      <h1 className={styles.title}>IronStore</h1> {/* Use the style */}
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange} />
      <ProductTable 
        products={productsData}
        filterText={filterText} 
        inStockOnly={inStockOnly} />
    </div>
  );
}

export default ProductsPage;
