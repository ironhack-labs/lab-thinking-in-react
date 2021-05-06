import React from 'react';
import styled from 'styled-components';

class ProductRow extends React.Component {
  render() {
    const NoStock = styled.td`
      color: red;
    `;

    const productList = this.props.products.map((product, index) => {
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

    return <div className="ProductRow">{productList}</div>;
  }
}

export default ProductRow;
