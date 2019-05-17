import React from 'react';

import ProductRow from './ProductRow.js';

import './ProductTable.css';

const ProductTable = (props) => {
    return (
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.data.map((prod, index) => {
            if (
              prod.name.toLowerCase().includes(props.searchWord.toLowerCase())
              && // if filtered (true), display in stock. Otherwise if false, display all
              (props.stockFilter === prod.stocked || props.stockFilter === false)
            ) {
              return <ProductRow key={index} name={prod.name} price={prod.price} stocked={prod.stocked} />
            } else {
              return null
            }
          })} 
        </tbody>
      </table>
    );
  } 

export default ProductTable;