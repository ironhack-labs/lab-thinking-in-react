import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
    const [products, setProducts] = useState(jsonData);

    const [myFilteredArray, setMyFilteredArray] = useState(jsonData)
    return(
        <div>
          <h1 className='title' >IronStore</h1>
          <label className='text'> Search</label>
          <SearchBar products={products} setMyFilteredArray={setMyFilteredArray} />
          <ProductTable productList={myFilteredArray} />
        </div>    
    )
  }  
  export default ProductsPage;



  
  