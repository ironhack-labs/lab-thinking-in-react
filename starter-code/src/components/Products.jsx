import React, { Component } from 'react';

const Products = props => {

  console.log(props);
  return (
    <table
      style={{
        marginLeft: '50%',
        transform: 'translate(-50%)'
      }}
    >
      <thead>
        <tr>
          <th> Name </th> <th> Price </th>
        </tr>
      </thead>
      <tbody>
        {props.products.data
          .filter(product => {
            if (props.checked) {
              return product.stocked &&  
              product.name.toLowerCase().startsWith(props.filter.toLowerCase())
              } 
              return product.name.toLowerCase().startsWith(props.filter.toLowerCase())
          }) 
          .map(product => {
            return (
              <tr>
                {product.stocked ? (
                  <td> {product.name} </td>
                ) : (
                  <td style={{ color: 'red' }}> {product.name} </td>
                )}
                <td> {product.price} </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Products;
