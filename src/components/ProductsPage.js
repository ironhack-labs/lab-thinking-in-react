import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchBox, setSearchBox] = useState('');
  const [searchCheckedBox, setCheckedBox] = useState(false);

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        searchBox={searchBox}
        setSearchBox={setSearchBox}
        searchCheckedBox={searchCheckedBox}
        setCheckedBox={setCheckedBox}
      />
      <ProductTable
        searchBox={searchBox}
        products={products}
        searchCheckedBox={searchCheckedBox}
      />
    </div>
  );
}

export default ProductsPage;
