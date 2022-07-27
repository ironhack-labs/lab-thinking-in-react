
import { useState, useEffect } from 'react';
import Search from './Search';
import ProductTable from './ProductTable';
import data from '../data.json';

function ProductsPage () {

  const [products, setProducts] = useState(data);
  const [prodData, setprodData] = useState(data);
  const [search, setSearch] = useState("");
  const [check, setCheck] = useState(false);

//Search functionality:
useEffect(() =>{
  const filter = prodData.filter(product => {
    if(check && !prodData.inStock){
      return false
    } else {
    return product.name.toLowerCase().includes(search.toLowerCase())
    }
  })
  setProducts(filter)
}, [search])

  return(
      <div>
        <h1>IronStore 🛒</h1>
        <Search search={setSearch} checked={setCheck}/>
        <ProductTable products={products}/>
      </div>
  )
}
export default ProductsPage;