import { useState } from 'react';
import jsonData from '../data.json';
import react from 'react';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import CheckBox from './checkbox';

function ProductsPage (props) {
  const [products, setProducts] = useState(jsonData);
  const [query, setQuery] = useState('');
  const[check, setCheck] = useState(false)
  
   let  filteredProducts = products.filter(product =>{
       return product.name.toLowerCase().includes(query) 
   })
   
    if(check){
      filteredProducts = filteredProducts.filter(product => product.inStock === true);
    }

 
  return(
      <div>
        <h1>IronStore</h1>
        <div>
          <SearchBar setQueryProp={setQuery} />
          <div>
            <CheckBox setCheckProp={setCheck} />
          </div>
        </div>
        <div>
            <ProductTable products={filteredProducts} />

        </div>
      </div> 
      
  )
}


export default ProductsPage