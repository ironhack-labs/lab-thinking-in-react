import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [product, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <di>
      <h1>IronStore</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        product={product}
      />

      <ProductTable product={product} />
    </di>
  );
}

export default ProductsPage;
