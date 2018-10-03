import React from 'react';
import ProductRow from './ProductRow';

export const ProductCategoryRow = (props) =>  {


    return (
      <div>
      <tr>
        <th>
       Sporting Goods
        </th>
        <tbody>
        {props.products.products.map((e) => {
  if(e.category === "Sporting Goods"){
    if(!e.stocked){
  return <ProductRow style={{color:"red"}} key={e.name} {...e}/>
  } else {
    return <ProductRow style={{color:"black"}}key={e.name} {...e}/>}}
  }

)}
          </tbody>
        <th>
       Electronics
        </th>
        <tbody>
        {props.products.products.map((e) => {
  if(e.category === "Electronics"){
  if(!e.stocked){
   return <ProductRow style={{color:"red"}} key={e.name} {...e}/>
  } else {
    return <ProductRow style={{color:"black"}}key={e.name} {...e}/>}}
        })}
         </tbody>
      </tr>
     
      </div>
    );
  }


export default ProductCategoryRow;





