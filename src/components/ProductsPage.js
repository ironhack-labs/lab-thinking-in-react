import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('');
  const [stock, setStock] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleCheckbox = (e) => {
    setStock(e.target.checked);
  };

  const searchList = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const stockList = searchList.filter((product) =>
    stock ? product.inStock : true
  );
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        search={search}
        onSearch={handleSearch}
        onCheck={handleCheckbox}
      />

      <ProductTable products={stockList} />
    </div>
  );
}

export default ProductsPage;
