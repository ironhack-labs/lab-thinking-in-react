import React, { Component } from 'react';
import './App.css';
import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

class ProductTable extends Component {
  showItems = (products, category) => { 
    return products.map((product, index)=>{
      if(product.category === category){
        if(!product.stocked) {
          return(
            <ProductRow class="red" key={index} name={product.name} price={product.price}/>
          )} else {
        return(
          <ProductRow key={index} name={product.name} price={product.price}/>
          )}
        }
    })
  }

  render() {

    const listOfCategories = this.props.products.reduce((x, y) => {
      if(x.indexOf(y.category) === -1) {
        x.push(y.category)
        return x
      } else return x
    }, [])



    const completeList = listOfCategories.map((category, index)=>{
      return (
          <tbody key={index + 300}>
            <ProductCategoryRow key={index + 200} category={category}/>
            {this.showItems(this.props.products, category)}
          </tbody>
      )
    });

    return (
      <table>
        <tbody>
          <tr>
          <th>Name</th><th>Price</th>
          </tr>
        </tbody>
          {completeList}
      </table>
    );
  }
}

export default ProductTable;