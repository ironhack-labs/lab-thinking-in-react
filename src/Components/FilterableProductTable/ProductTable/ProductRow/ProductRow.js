import React from 'react';
import './ProductRow.css'

const ProductRow = ({products}) => {
const hasStock = () => {
    let temp = '';
    if(products.stocked){
        return <p className='hastStock'>{products.name}</p>
    
    }
    if(!products.stocked){
        return <p className='noStock'>{products.name}</p>
    }
    return temp
}
 return (
   
    <div className='productRow'>
    
       <p >{hasStock()}</p>
       
       <p>{products.price}</p>
           
        </div>
   
)
}

export default ProductRow;
