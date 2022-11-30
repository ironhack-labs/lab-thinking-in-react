import { useState } from 'react';
import jsonData from '../data.json'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import * as React from 'react';
// import ProductRow from './ProductRow';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState("");

  const [checked, setChecked] = React.useState(false);
  const hideUnavalible = () => {
    setChecked(!checked);
  };
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <input type="checkbox" 
            value={checked}
            onChange={hideUnavalible}/>
        <ProductTable products={products} searchTerm={searchTerm} checked={checked}/>
      </div>    
  )
}

export default ProductsPage;