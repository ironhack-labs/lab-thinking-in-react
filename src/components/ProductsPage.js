
import { useState } from 'react';
import productsJSON from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(productsJSON);
  const [searchInput, setSearchInput] = useState("");
  const [checkedInput, setCheckedInput] = useState(false);
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} checkedInput={checkedInput} setCheckedInput={setCheckedInput}/>
        <ProductTable searchInput={searchInput} products={products} checkedInput={checkedInput}/>
      </div>    
  )
}

export default ProductsPage
