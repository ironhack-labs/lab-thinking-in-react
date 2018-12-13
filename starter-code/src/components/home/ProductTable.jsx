import React from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';


const ProductTable = ({name, price, category, stocked, drawCat}) =>{
console.log(stocked)
return(
<div>
  
  { drawCat && (<tr> <ProductCategoryRow category={category}/></tr>) }
  
  <tr >
    <ProductRow stocked={stocked} name={name} price={price}/>
  </tr>
  
</div>
    ) 
}

export default ProductTable