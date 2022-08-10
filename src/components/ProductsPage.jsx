import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable'

//    { "inStock": true,    "name": "Football",    "id": "295a4dab-74b2-4e60-b3c2-c1346aba7585"},


function ProductsPage () {

  const [products, setProducts] = useState(jsonData);
  const [filterCustom, setFilter] = useState('');
  const [inStock, setInStock] = useState(false)

  const handlerSearch = (e)=>{
setFilter(()=>e.target.value)
  }

  const productsFiltered = products.filter(product=>product.name.toLowerCase().includes(filterCustom.toLowerCase()))
  
const handlerInventory = (e) =>{
  setInStock(()=>e.target.checked)
}


const productsStock = productsFiltered.filter(productFilt=> productFilt.inStock===inStock)
console.log("filtered by stock",productsStock)

  //console.log("productos filtrados o sin filtrar",productsFiltered );

    return (

        <div>


      <div>
        <h1>IronStore</h1>
        <input type="text" placeholder="Search..." onChange={(e=>handlerSearch(e))} />
      </div>

<div className='stockChecker'>
<label>Only show products in stock</label>
      <input type="checkbox"  onChange={(e=>handlerInventory(e))}/>
      
      </div>


<ProductTable data={
  
  inStock?productsStock:productsFiltered
  
  
  }/>




</div>
    )
}

 export default ProductsPage;