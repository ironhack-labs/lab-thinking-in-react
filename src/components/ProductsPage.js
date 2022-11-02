import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [inStock, setInStock] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  console.log(products);
  console.log('PP Search Value', searchValue);
  console.log('PP Checkbox Value', inStock);

  function handleChangeSearch(elem) {
    setSearchValue(elem.target.value);
  }

  function handleChangeInStock(elem) {
    setInStock(elem.target.checked);
  }

  return (
    <div className='mainDiv'>
      <h1>IronStore</h1>
      <SearchBar
        searchValue={searchValue}
        handleChangeSearch={handleChangeSearch}
        inStock={inStock}
        handleChangeInStock={handleChangeInStock}
      />
      <ProductTable
        products={products}
        searchValue={searchValue}
        inStock={inStock}
      />
    </div>
  );
}

export default ProductsPage;
