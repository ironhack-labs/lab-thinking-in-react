import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearch = (event) => {
    setSearchKeyword(event.target.value);
  };

  const filteredProduct = !searchKeyword.length
    ? products
    : products.filter((product) =>
      product.name
        .toLocaleLowerCase()
        .includes(searchKeyword.toLocaleLowerCase())
    );

  const handleCheck = (event) => {
    event.target.checked ? setProducts(products.filter((product) => product.inStock)) :
      setProducts(jsonData);
  }

  return (
    <div className='ProductPage'>
      <h1>IronStore</h1>
      <SearchBar handleSearch={handleSearch} searchKeyword={searchKeyword} handleCheck={handleCheck
      } />
      <ProductTable products={filteredProduct} />
    </div>
  )
}

export default ProductsPage