function ProductRow({ product }) {
  const outOfStockStyle = {
    color: 'red',
  };

  return (
    <tr>
      {product.inStock ? (
        <td>{product.name}</td>
      ) : (
        <td style={outOfStockStyle}>{product.name}</td>
      )}
      {product.inStock ? (
        <td>{product.price}</td>
      ) : (
        <td style={outOfStockStyle}>{product.price}</td>
      )}
    </tr>
  );
}

export default ProductRow;
