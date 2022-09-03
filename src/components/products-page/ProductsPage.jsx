import SearchBar from '../search-bar/SearchBar';
import ProductTable from '../product-table/ProductTable';
import { useState } from 'react';
import jsonData from './../../data.json';

function ProductsPage() {
  const [stringSearch, setStringSearch] = useState('');
  const [checkProduct, setCheckProduct] = useState(false);

  const handleSearch = (event) => {
    setStringSearch(event.target.value.toLowerCase());
  };

  const handleCheck = (event) => {
    setCheckProduct(event.target.checked);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-3">IronStore</h1>
      <SearchBar search={handleSearch} check={handleCheck} />
      <ProductTable
        products={jsonData
          .filter((product) =>
            stringSearch !== ''
              ? product.name.toLowerCase().includes(stringSearch.toLowerCase())
              : true
          )
          .filter((product) => (checkProduct ? product.inStock : true))}
      />
    </div>
  );
}
export default ProductsPage;
