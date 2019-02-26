import React, { Component } from 'react';
import ProductData from '../data.json'

const ProductRow = props => {

    return (
      
      <div className="App">
        {ProductData.map((eachProduct, index) => {
          let onstock ="";
          if (eachProduct.stocked) {onstock="on stock"} else {onstock="NOT on stock"}
          return (
            <div key={index}>
              <div><b>{eachProduct.name}</b></div>
              <div>{eachProduct.category}</div>
              <br></br>
              <div>{eachProduct.price}</div>
              <div>{onstock}</div>
              
              <hr />
            </div>
          );
        })}
      </div>
    );
  }


export default ProductRow;