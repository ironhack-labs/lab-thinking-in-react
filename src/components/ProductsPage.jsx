import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchQuery, setSearchQuery] = useState('');
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        showInStockOnly={showInStockOnly}
        setShowInStockOnly={setShowInStockOnly}
      />
      <ProductTable
        products={products}
        searchQuery={searchQuery}
        showInStockOnly={showInStockOnly}
      />
    </div>
  );
}
export default ProductsPage;
