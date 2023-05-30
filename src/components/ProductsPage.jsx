import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState(jsonData);
  const [showInStock, setShowInStock] = useState(false);
  const handleCheckbox = (event) => {
    setShowInStock(event.target.checked);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar search={search} setSearch={setSearch} />
      Only show products in stock
      <input type="checkbox" onChange={handleCheckbox} />
      <ProductTable
        products={products}
        setProducts={setProducts}
        search={search}
        showInStock={showInStock}
      />
    </div>
  );
}
export default ProductsPage;
