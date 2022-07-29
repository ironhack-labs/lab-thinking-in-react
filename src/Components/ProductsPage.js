import { useState } from 'react';
import data from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';


function ProductsPage () {
const [products, setProducts] = useState(jsonData);
const [productTable, setProductsTable] = useState(jsonData)
const [SearchBar, setSearchBar] = useState()
const [stock , SetStock]= useState(false)


  return(
      <div>
        <h1>IronStore</h1>
      </div>    
      <div className="product-container">
      {productTable.map((element) => (
        <products
          key={element._id}
          products={element}
  
  
  
  
      )
      
}
export default ProductsPage;