

function ProductRow({ product }) {
  const productStyle = {
    color: product.inStock ? 'black' : 'red',
  };

  return (
    <tr>
      <td style={productStyle}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
