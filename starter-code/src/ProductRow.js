import React, { Component } from 'react';

const ProductRow = props => {
  console.log(props);
  return (
    <tbody>
      {props.data
        .filter(item => {
          return item.name.toLowerCase().includes(props.search);
        })
        .map((item, index) => {
          const { name, price } = item;
          return (
            <tr className="tablebody" key={index}>
              <td>{name}</td>
              <td>{price} </td>
            </tr>
          );
        })}
    </tbody>
  );
};

export default ProductRow;
