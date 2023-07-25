import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductsTable from './ProductsTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
  }
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar searchByWord={handleSearchTermChange}/>
        <ProductsTable products={products} searchTerm={searchTerm}/>
      </div>    
  )
}

export default ProductsPage;