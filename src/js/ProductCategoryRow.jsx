import React, {Component} from 'react';
import ProductRow from './ProductRow';

const ProductCategoryRow = props => {
  return(
    <div>
      <table width="100%">
        <tbody>
          <tr>
            <td colSpan="2" className="category">
              
                {props.category}
              
            </td>
          </tr>
          {props.products.map((product, index) =>{
            return <ProductRow key={index} item={product}/>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductCategoryRow