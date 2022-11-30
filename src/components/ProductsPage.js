import { useState } from 'react';
import jsonData from '../data.json'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
// import ProductRow from './ProductRow';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState("");

  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ProductTable products={products} searchTerm={searchTerm}/>
      </div>    
  )
}

export default ProductsPage;