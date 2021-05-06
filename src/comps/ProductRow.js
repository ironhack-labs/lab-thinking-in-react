// imports
import React from 'react';
import styled from 'styled-components';

// component
class ProductRow extends React.Component {
  render() {
    const NoStock = styled.td`
      color: red;
    `;
    const products = this.props.filteredProducts.map((product, index) => {
      return product.stocked ? (
        <tr key={index}>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      ) : (
        <tr key={index}>
          <NoStock>{product.name}</NoStock>
          <NoStock>{product.price}</NoStock>
        </tr>
      );
    });
    return <tbody>{products}</tbody>;
  }
}

//export
export default ProductRow;
