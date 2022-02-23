//ProductPage.js

import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(products); //make sure to always have an update steate to reference

  const filterProducts = (searchTerm) => {
    let filteredProductList;

    if (searchTerm === '') {
        filteredProductList = products; //must be inital state
    } else {
        filteredProductList = products.filter((product) => {
            return product.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
    }
      setFilteredProducts(filteredProductList);
  }
    
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar filterProducts={filterProducts}/>
        <br />
        <hr />
        <br />
        <ProductTable productsList={filteredProducts}/>
      </div>    
  )
}

export default ProductsPage;