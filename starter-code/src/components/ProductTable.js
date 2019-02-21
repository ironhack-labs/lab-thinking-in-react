import React from 'react';

const ProductTable = props => {
  const styling = (stocked) => {
    return {
      color: stocked ? 'black' : 'red'
    }
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map(product => {
            return (<tr key={product.name} style={styling(product.stocked)}>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>);
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
