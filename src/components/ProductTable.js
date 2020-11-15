import React from 'react';
import ProductRow from './ProductRow';

function ProductTable(props){

    return (
      <table className="table">
        <thead>
          <tr className="thead-dark">
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.children.map((el) => {
            return <ProductRow key={el.id}>{el}</ProductRow>;
          })}
        </tbody>
      </table>
    );



}

export default ProductTable;