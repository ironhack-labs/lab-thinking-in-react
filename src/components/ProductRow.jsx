function ProductRow({ product }) {
  const rowStyle = product.inStock ? {} : { color: 'red' };

  return (
    <tr style={rowStyle}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;