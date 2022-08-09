import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable'

//    "name": "Football'

function ProductsPage () {

  const [products, setProducts] = useState(jsonData);
  const [filterCustom, setFilter] = useState('');

  const handlerSearch = (e)=>{
setFilter(()=>e.target.value)
  }

  const productsFiltered = products.filter(product=>product.name.toLowerCase().includes(filterCustom.toLowerCase()))
  

  console.log("productos filtrados o sin filtrar",productsFiltered );

    return (

        <div>


      <div>
        <h1>IronStore</h1>
        <input type="text" placeholder="Search..." onChange={(e=>handlerSearch(e))} />
      </div>
  


<ProductTable data={productsFiltered}/>




</div>
    )
}

 export default ProductsPage;