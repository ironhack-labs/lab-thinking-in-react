import React, {Component} from 'react';
import Category from './ProductCategory';

export default ({products, categories}) =>{
  //console.log(categories);
  return(
    <div className="Table">
      <table width="100%">
        <tbody>
          <tr align="left">
            <td>Name</td><td>Price</td>
          </tr>
        </tbody>
      </table>
      {categories.map((category, index) =>{
        let productsFiltered = products.filter(item => item.category === category);
        return <Category key={index} category={category} products={productsFiltered} />
      })}
    </div>
  )
}