import React, {Component} from 'react';
import Item from './ProductRow';
 const ProductCategory = ({category, products}) => {
  return(
    <div>
      <table width="100%">
        <tbody>
          <tr>
            <td colSpan="2" className="Category">
              
                {category}
              
            </td>
          </tr>
          {products.map((product, index) =>{
            return <Item key={index} item={product}/>
          })}
        </tbody>
      </table>
    </div>
  )
} 

export default ProductCategory