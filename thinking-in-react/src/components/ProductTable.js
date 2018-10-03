import React from 'react'

import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

export default class ProductTable extends React.Component{
  render(){

    const productsArray = []
    
    console.log(this.props.products.data)

    let lastCategory = null

    this.props.products.data.forEach((product, i) => {
      if (product.category !== lastCategory) {     
        productsArray.push(
          <ProductCategoryRow category = {product.category} key={i}/>
        )
      }

      productsArray.push(
        <ProductRow 
            key={product.name}
            name={product.name}
            price={product.price}
          />
      );
      lastCategory = product.category

    });



    return(
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {productsArray}
          </tbody>
        </table>
      </div>
    );
  }

}