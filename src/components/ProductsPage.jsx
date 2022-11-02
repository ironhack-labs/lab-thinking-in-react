import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from '../components/SearchBar';
import ProductTable from '../components/ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [filterText, setFilterText] = useState('');

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText} 
         />
      <ProductTable
        products={products}
        filterText={filterText}
         />
    </div>
  )
}

export default ProductsPage;