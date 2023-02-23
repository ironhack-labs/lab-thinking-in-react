import React from 'react'

const ProductRow = (props) => {
    const { product } = props;
    const productName = product.inStock ? (
      product.name
    ) : (
      <span style={{ color: 'red' }}>{product.name}</span>
    );
  
    return (
      <tr>
        <td>{productName}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
  
  function ProductTable(props) {
    const { products } = props;
    const productRows = products.map(product => (
      <ProductRow key={product.id} product={product} />
    ));

    console.log (productRows) 
  
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{productRows}</tbody>
      </table>
    );
  }


export default ProductRow